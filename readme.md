# p5 v2.x typescript project starter (global/instance mode)

This is an opinionated starter project for coding p5.js v2.x sketches in TypeScript

## Install - do this before coding

In the editor you will see typescript errors about p5 functions until this step is done:

```bash
npm i
```

Also, if you haven't already, either install the recommended [prettier extension for code formatting](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), or delete the relevant `editor.defaultFormatter` line from `.vscode/settings.json`.

## Running the dev server

```bash
npm run dev
```

## Type-checking on the command-line

```bash
npm run type-check
```

This will type-check all TypeScript files under `src/` . This can be configured with the include property in `tsconfig.json`.

Any errors will be reported to the standard output (likely your terminal).

## Type-checking in VSCode

If you are using VSCode, any open TypeScript files will be type-checked and any issues will:

- be highlit with red squiggles, by default
- added to the "problems" window - which you can view with `View: Problems`

You can also type-check ALL project typescript files whether they are open or closed, using the keyboard shortcut:

- `cmd-shift-b` (mac) or
- `ctrl-shift-b` (windows)

Again this will populate VSCode's problems window with any results. This behaviour is configured in `.VSCode/tasks.json` and behind the scenes it makes use of the `type-check` script declared in our `package.json`.

## Setting visibility of dist/ and node_modules/ in vscode

The file `.vscode/settings.json` controls whether or not the folders `node_modules` and `dist` are shown in vscode files panel. Edit these to your preference. When working on a custom build it can be useful to monitor what is being generated to dist/ but on the other hand, if these files are not hidden

## Building

```bash
npm run build
```

This is the default build action that should be used by hosting services like netlify, vercel, github pages, etc.

## Building a readable single-file JS for sharing on web editors

```bash
npm run build:for-web-editors
```

This will build into `dist/` a set of files including a single javascript file, the contents of which should be suitable for copying to the p5 web editor or openprocessing.

## optional: Running unit tests (WIP)

Note, these are not set up to test with p5 functions or values yet, so are of limited use.

```bash
npm run test
```

## About this project's template

This project was set up by making a copy of this template: https://github.com/nbogie/p5-v2-ts-global-mode-starter

### Making another project like this one

To make another project like this one, it is easiest to run

`npx degit nbogie/p5-v2-ts-global-mode-starter`

Alternatively, just download the template as a zip and delete any files or directories listed in degit.json

If you're using github, and want to create a new repo there, you can click on `use this template`. [More detail, if needed, is here](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

## Other p5 project starters

Do you want a starter project for:
p5 v1.x ?
v2.x?
For TS?
For JS with type-checking?
For Global mode ?
For Instance Mode?

Most can be found at:
https://github.com/nbogie/p5-beyond-the-web-editor-neill/blob/main/docs/starter-projects.md
