# @brightsole/new

### What is it?
<details>
  <summary>
    tl;dr: Quick-as-lightning project instantiator.
  </summary>
  <br />

  I write tons of little apps in my free time. CLIs, frontends, packages, serverless projects... etc. The problem is, probably 75% of my time is taken up by dumb, mindless grind-work getting things like eslint/ava/process flow put together, and it's really hampered how quickly I can churn things out.


  So this repo is a meta-repo. It allows you to instantiate a new project, in a style I find agreeable, in mere seconds. It doesn't hide anything, it doesn't magic away anything that isn't *just completely dull as dishwater*. It's just here to let me build. **fast**.

  If there's anything in here that can be removed, it probably already has been. **But make no mistake, I'm making some choices here**. Every project uses `ava`. Every project uses reasonable `prettier`/`eslint` rules. Every project is tied to a github repo. Custom configuration at instantiation time is a luxury for when this tool is used by anyone not named `one19`, **and only then**. I will be debating optionally adding `typescript` to some things, same with `flow`. Otherwise, it'll be *super duper barebones and no frills*. Open an issue if you'd like, but a PR would be infinitely preferrable to my sanity, and yours, whomever you are. I hate this configuration shit, and this project is made to help me escape it, *please* don't drag me into more of it if you don't have to.

</details>
<br/>

### How to use it?
<details>
  <summary>
    tl;dr: <code>yarn global add @brightsole/new && new TYPEOF SOMETHING</code>
  </summary>
  <br />


  ### You can create a variety of project types:
  -------------

  #### CLI
  <details>
    <summary>
      tl;dr: <code>new cli [new-location-folderName] -[options]</code>
    </summary>
    <br />

  `New` can create an easy-to-start-with cli project with the command: `new cli`. It takes one argument, the folderName, and tries to use that as the app name. You may also specify an alternate to override it with `-n`. More options forthcoming.

  The new cli has a few nice features: `signale`, for a running log cli system, `commander` **the standard of excellence** for consuming & using command line arguments & options, `lodash` and `ava` for testing.

  | Arg | Longform | Description | Example |
  | :---------------: | :---------------: | :--------------- | ---------------: |
  | **\*** |  | folderName/name of the new project | `new cli <folderName>` |
  | **-n** | --pretty-name | custom internal name to override folderName | `new cli ../bingle -n 'super-bingle'` |

  </details>

  -------------

  #### FRONT
  <details>
    <summary>
      tl;dr: <code>new front [new-location-folderName] -[options]</code>
    </summary>
    <br />

  `New` also allows you to create a new `frontend` project. It has a few nice features: `ava` for testing, `parcel-bundler` for hot reload and production builds, `axios` for network requests, `styled-components` anc `chroma-js` for :nail_care:, and `a-plus-forms` and `a-plus-forms-json-validator` for forms & validation.

  | Arg | Longform | Description | Example |
  | :---------------: | :---------------: | :--------------- | ---------------: |
  | **\*** |  | folderName/name of the new project | `new front <folderName>` |
  | **-n** | --pretty-name | custom internal name to override folderName | `new front ../bingle -n 'bingle-frontend'` |

  -------------

  #### PACKAGE
  <details>
    <summary>
      tl;dr: <code>new package [new-location-folderName] -[options]</code>
    </summary>
    <br />

  `New` also allows you to create a new `package` project. It has a very few nice features: pretty much just `ava` for testing. It just helps you get your foot in the door that much faster.

  It's very likely this will be the first project to have typescript inclusion.

  | Arg | Longform | Description | Example |
  | :---------------: | :---------------: | :--------------- | ---------------: |
  | **\*** |  | folderName/name of the new project | `new package <folderName>` |
  | **-n** | --pretty-name | custom internal name to override folderName | `new package ../qul -n 'qul-dev'` |

  -------------

  </details>

</details>
<br/>

### TODO:
<details>
<summary>tl;dr: <strong>LOTS</strong></summary>
<br />

#### CI
1. tool for adding travis setup
2. command for telling travis to test repo
3. command for instantiating codeClimate
4. command for grabbing token for coverage upload and giving it to travis
5. tool for snyk setup
6. command for telling snyk to watch the repo

#### SERVERLESS
1. project instantiation
2. create the cli tool for it

#### GENERIC PACKAGE
1. rework its shebang to have options like the following:
  1. code transpilation
  2. typescript type compilation

#### @brightsole/NEW
1. add it to project-status
2. generate a couple badges
3. add it to travis-ci
4. report coverage
5. report test percentage
6. report code quality
8. pre-build clean hook
9. read git username dynamically from global environment
10. option to specify git repo location in entirety
11. post-create hooks to `yarn` and `git-init`
12. properly good tests for cloner util

</details>
<br/>