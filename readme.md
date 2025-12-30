# Your project title

## Install - do this before coding

In the editor you will see typescript errors about p5 functions until this step is done:

```bash
npm i
```

## Running the dev server

```bash
npm run dev
```

## Type-checking

```bash
npm run type-check
```

or if using vscode, in the editor use:
 * `cmd-shift-b` (mac) or 
 * `ctrl-shift-b` (windows) 
 
 This will run the type-check across ALL project ts files and to populate vscode's problems window with any results.  This is configured in `.vscode/tasks.json`.

## Building

```bash
npm run build
```

## Building readable JS (single file) - WIP

```bash
npm run build:for-web-editors
```

## optional: Running unit tests

Note, these are not set up to test with p5 functions or values yet, so are of limited use.

```bash
npm run test
```

## About this project's template

This project was set up by making a copy of this template: https://github.com/nbogie/p5-v2-ts-global-mode-starter

### Making another project like this one

To make another project like this one, it is easiest to run

`npx degit nbogie/p5-v2-ts-global-mode-starter`

Alternatively, just download the template as a zip and delete any files listed in degit.json

If you're using github, and want to create a new repo there, you can click on `use this template`.  [More detail, if needed, is here](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

## Other p5 project starters

Want a starter for p5 v1 ?  v2?  TS?  JS with type-checking?  Global mode ?  Instance Mode?

https://github.com/nbogie/p5-beyond-the-web-editor-neill/blob/main/docs/starter-projects.md
