# @BRIGHTSOLE/new-front

### What is it?
<details>
  <summary>
    tl;dr: <TODO>: A frontend application
  </summary>
  <br />

  A brand new frontend project!

  It's ready for you to add some functionality, and gh-pages publish it!

</details>
<br/>

### How to use it?
<details>
  <summary>
    tl;dr: <code>yarn && yarn start</code>
  </summary>
  <br />

  It's ready to roll *right now*

  The crazy huge blob that instantiates and pushes it straight to GH-Pages in a working format:
  ```sh
  yarn && yarn build && git init && git add . && git remote add origin $YOUR_REPO && git commit -m ':sparkles: init commit!' && git push --set-upstream origin master
  ```

  You might want to change the favicon, it's easy to do. I used [faviconit](http://faviconit.com/en). It's a pretty no-frills quick solution.

  Also, in the build step, the url of the repo is used to make GH-Pages work properly. The following line is where the magic happens:

  ```json
  parcel build index.html --public-url https://one19.github.io/new-front/
  ```

  If you're using a custom domain, this is overkill. You could simply do `parcel build index.html` and that should work just fine!


  #### Some of the scripts, and what they do

  | Command | Description |
  | :---------------: | :---------------: |
  | `yarn start` | starts a hot reload server running the app |
  | `yarn build` | builds a set of production assets into `./docs` |
  | `yarn test` | runs through the tests |
  | `yarn coverage` | runs through the tests, outputting coverage into `./coverage` |
  | `yarn lint` | lints the project, trying to fix any issues automatically |
  | `yarn storybooks` | starts up a storybook server |


  #### More details:

  `yarn build` doesn't remove the CNAME file that `gh-pages` puts into the docs directory, if you choose to deploy things using the `master/docs` deployment route on GH.

  There's a pre-commit hook that builds production assets on every commit. It might be worthwhile to disable this if you care about your git history being clean. **I really really don't** *however*, so I left it as the default action. `prepush` doesn't push new compiled assets, so you have to run it twice, and that sucks. If you ever want to get moving **fast** leave it in. 
  
  If someday you want to clean all that out and use something *not* **incredibly shoestring** like `precommit` compiling the assets, it's stupendously easy to clean your git history and keep rolling like you were never in the ghetto at all.


  ### PACKAGE EXPLANATIONS:
  - `ava` requires `@babel/register`
  - `localforage`/`chroma-js`/`nanoid` are all high-quality utility deps that are good for getting up to speed fast
  - `a-plus-forms`/`a-plus-forms-json-validator` are both used for forms & are of similar quality
  - `husky` should never be upgraded beyond 1. It disables the fun tricks used to pre/post build & more


</details>
<br/>

### TODO:
<details>
<summary>tl;dr: </TODO></summary>
<br />

  1. <TODO>

</details>
<br/>