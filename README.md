# Arpit Sheth (React website)
Personal website and portfolio.


# Set Up

## First Time Environment Set up
Ensure that you have **Node.js** installed. Typically, this is done by:
```
sudo apt-get update
sudo apt-get install nodejs
```

We'll be using the **Yarn** package manager. (NPM is another popular alternative).
Ensure it is installed already
```
sudo apt-get update && sudo apt-get install yarn
```

Ensure that you are able to manage Node.js versions in the future
```
yarn global add n
```

**To update Node the the stable or latest version, use one of these commands:**
```
sudo n stable
sudo n latest
```

Navigate to where Nginx websites are served. Typically, this is:
```
cd /usr/share/nginx/
```

Create a new directory for our project
```
mkdir arpitsheth
```

## Setting up React
*These instructions should generally work for setting up any React webapp/website in the future.
Based on Code Academy's [React Setup Tutorial](https://www.codecademy.com/articles/react-setup).*

Initialize **Yarn** and fill out the prompts for the new project.
```
yarn init
```

Install **React** and **React-DOM**
```
yarn add react
yarn add react-dom
```

Install **Babel** dev dependencies
```
yarn add babel-core babel-loader babel-preset-react --dev
```

Create the **Babel Config File** in the root directory of the project
```
nano .babelrc
```
Then add the following text in the file and save: `{ presets: ['react'] }`

Install **Webpack**
```
yarn add webpack webpack-dev-server html-webpack-plugin --dev
```

Create the **Webpack Config File** in the root directory of the project
```
nano webpack.config.js
```
Within the file, copy the following:
```
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: __dirname + '/app/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'app-compiled.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig]
};
```

Open up package.json with `nano package.json` and **add a few scripts** to simplify things:
```
  "scripts": {
    "build": "webpack",
    "start": "webpack-dev-server"
  }
```
* `yarn run build` will make Webpack run its transformations and build the app
* `yarn run start` will start the dev server

## Adding basic React files
Create an app folder from within the root directory of the project
```
mkdir app
cd app
```
Then, `nano index.html` and inside it:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My React App</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

Next, `nano index.js` and inside it:
```
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```
