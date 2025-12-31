# p5 v2.x typescript project starter (global/instance mode)

## Install - do this before coding

In the editor you will see typescript errors about p5 functions until this step is done:

```bash
npm i
```

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

If you're using github, and want to create a new repo there, you can click on `use this template`. [More detail, if needed, is here](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

## Other p5 project starters

Want a starter for p5 v1 ? v2? TS? JS with type-checking? Global mode ? Instance Mode?

https://github.com/nbogie/p5-beyond-the-web-editor-neill/blob/main/docs/starter-projects.md
