This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Tooling Commands
* `npm run lint` - Used to find various static code analyzing errors such as unused variables. Can be customized in the `.eslintrc.json` file see [here](https://eslint.org/docs/user-guide/configuring) for configuration
* `npm run lint-fix` - Used to find and **fix** various static code analyzing errors such as unused variables, that it is able to fix without altering code structure or flow.
* `npm run pretty` - Styles the code into a consistent look and feel. Can be customized in the `.prettierrc` file see [here](https://prettier.io/docs/en/configuration.html) for configuration.
* `npm run lint-pretty` - Run both `lint-fix` and `pretty`.

## Libraries
### Styling
* [Emotion](https://github.com/emotion-js/emotion) - used to embed class-like styling directly into a class created at compile time. Example:
```js
const styledComp = (props) => (
	<div
		className={css`
			color: red;
			padding: ${props.padding}
		`}>
			Text
	</diov>
);
```
* [Styled Systems](https://github.com/styled-system/styled-system) - used to give components props that directly map to styling. There is a built in scaling for various props see [Scaling](https://styled-system.com/theme-specification#scale-objects)
```js
const styledComp = (props) => (
	<div
		width={1/2}
		height="32px"
		pl="1"
		>
			Text
	</diov>
);
```
### Tooling
Tooling enables consistent look and feel for code reducing commit noise to only the relevant changes and not stylistic or new-line swapping. Commands exists to lint `lint`, auto fix lint issues `lint-fix`, and style `pretty` the code independently of each other, or there is a joint command `lint-pretty` that will lint, fix, and style in 1 pass
* [eslint](https://eslint.org/) - used to spot common errors
* [prettier](https://prettier.io/) - used to create a consistent look and feel to code
* [editorconfig](https://editorconfig.org/) - used to ensure consistent editor styling