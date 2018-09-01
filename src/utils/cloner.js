const fs = require('fs');

/**
 * Recursive cloner for our project,
 * calls itself to construct a new project
 *
 * @param {String} newPathSection - project folder that mirrors the following local path
 * @param {String} localSection - local filepath being read and cloned
 * @param {String} replaceName - function to replace the `new-{TYPE}` placeholder
 */
const recursiveClone = (newPathSection, localSection, replaceName) => {
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
      const ignoreFix = path === 'gitignore' ? '.' : '';
      return recursiveClone(
        `${newPathSection}/${ignoreFix}${path}`,
        `${localSection}/${path}`,
        replaceName
      );
    });
  }

  const contents = fs.readFileSync(localSection, { encoding: 'utf8' });
  return fs.writeFileSync(newPathSection, replaceName(contents));
};

/**
 * Tries to clone a project into a new directory, changing `new-{TYPE}` into
 * the new project name. Instantiates `recursiveClone`
 *
 * @param {String} [projectName] - new folder to create the project in
 * @param {Object} options - optional file io properties
 * @param {String} options.name - alternate internal name for the project
 */
module.exports.default = (type, projectName, options = {}) => {
  if (type !== 'cli') {
    runningLog.fatal('No other project types exist at the moment');
    throw new Error();
  }

  const { prettyName } = options;
  const name = prettyName || projectName;

  const RE_NAME_REPLACE = new RegExp(`new-${type}`, 'g');
  const replaceName = contents => contents.replace(RE_NAME_REPLACE, name);

  const newProjectDir = `./${projectName}`;

  recursiveClone(newProjectDir, `${__dirname}/../cli`, replaceName);
};
