### Getting started

To start get the project started please follow the steps below.

1. Clone the repo from here 
2. Checkout the repo
3. type yarn
4. yarn start

It should then start the app up.

### Branch details

I ran into some trouble with git and my repo but when it all started to work together there ended up being a main branch and master branch. All of my work is in the master branch. So please check that branch out.

#### To run the tests

1. yarn test

### Tech stack used:

I used React, redux, typescript, react hooks and for the tests I used jest and enzyme.
For styles I used SCSS, BEM(naming convention), flexbox.

### Approach

I started this app from create-react-app and built it from there. I used TDD approach to make this SPA. I started off with some basic tests and added them as I felt they needed more. I have taken the component based approach to keep all of the calls to a single source to reduce the number of calls being made(this way would be even more prominent if we were making multiple calls) while respecting the flow of the props.

There is still some that can be refactored and I can definitely make up better classNames and make it look a bit more similar to the given image with some more elegant styling solutions.

I know a lot of people don't use TypeScript but would rather go with plain react with its functional and class components which I am completely fine with but I have gone with TS because it feels simpler and cleaner with it than without it. For one thing it helps you get rid of specifying the props and proptypes at the end of the class function (which we can get rid of when using TS) but instead you have the types defined right the top and also helps you understand the type of data you are supposed to pass through instead of guessing which makes it easier to write you tests too. I have also used React hooks because once again I feel it is very concise and clear and easy to understand once you used it for a while and I love using hooks. :)

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
