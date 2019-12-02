const fs = require('fs');

/**
 * Recursive cloner for our project,
 * calls itself to construct a new project
 *
 * @param {String} newPathSection - project folder that mirrors the following local path
 * @param {String} localSection - local filepath being read and cloned
 * @param {String} modifyContent - function to modify file contents on the way to the file system
 */
const recursiveClone = (newPathSection, localSection, modifyContent) => {
  const stats = fs.statSync(localSection);

  if (stats.isDirectory()) {
    try {
      fs.mkdirSync(newPathSection);
    } catch (error) {
      runningLog.fatal(`Unable to create new directory ${newPathSection}`);
      throw error;
    }

    const filePaths = fs.readdirSync(localSection);
    return filePaths.forEach(path => {
      const ignoreFix = path.match(/^(git|npm)/) ? '.' : '';
      return recursiveClone(
        `${newPathSection}/${ignoreFix}${path}`,
        `${localSection}/${path}`,
        modifyContent
      );
    });
  }

  const contents = fs.readFileSync(localSection, { encoding: 'utf8' });
  return fs.writeFileSync(newPathSection, modifyContent(contents));
};

const modifierChain = (...modifierFunctions) => content =>
  modifierFunctions.reduce(
    (result, modifierFunction) => modifierFunction(result),
    content
  );

/**
 * Tries to clone a project into a new directory, changing `new-{TYPE}` into
 * the new project name. Instantiates `recursiveClone`
 *
 * @param {String} type - type of project to clone
 * @param {String} projectName - new folder to create project in & default name
 * @param {Object} [options] - optional file io properties
 * @param {String} options.name - alternate internal name for the project
 */
module.exports.default = (type, projectName, options = {}) => {
  if (!['cli', 'front', 'package'].includes(type)) {
    runningLog.fatal('No other project types exist at the moment');
    throw new Error();
  }

  const { prettyName } = options;
  const name = prettyName || projectName;

  const RE_NAME_REPLACE = new RegExp(`new-${type}`, 'g');
  const replaceName = contents => contents.replace(RE_NAME_REPLACE, name);
  const renameFilesExclusion = contents =>
    contents.replace(/"_files":/, '"files":');

  const newProjectDir = `./${projectName}`;

  recursiveClone(
    newProjectDir,
    `${__dirname}/../${type}`,
    modifierChain(replaceName, renameFilesExclusion)
  );
};
