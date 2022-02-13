## Notes

### Bootstrapping a new project (without react-app)

1. In the root directory of the project, run the command `npm init`. It asks a bunch of questions. To skip all of them just append the parameter `-y`. It will create the `package.json` file meant to store the dependencies, scripts, etc.
2. Add and configure prettier extension to enable auto-formatting to keep code standardised (spaces or tabs? semi-colons? Indentation etc). (1) `npm install -D prettier` (2) create a new file at the root of the file called `.prettierrc`. (3) add configuration to define things like double quotes or single quotes, 2 or 4 spaces, tabs or spaces, etc. - an empty object ({}) means use the defaults. (4) create a shortcut script within `package.json` to ease execution (e.g `"format": "prettier --write \"src/**/*.{js,jsx}\""`). (5) to execute run the command `npm run format` (or to execute without the npm script: `npx prettier --write "src/**/*.{js,jsx}"`)
3. Install prettier VSCode extension (Prettier - Code formatter by esbenp.prettier-vscode). Enable the configurations (command comma) (1) turn on `Editor: Format On Save` (2) turn on `Prettier: Require Config`
