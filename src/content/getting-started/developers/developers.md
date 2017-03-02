**The _Carbon Component library_ gives developers (Front End Developers & Engineers) a collection of re-usable HTML and Sass partials they can use for building websites and user-interfaces for Bluemix. The aim is for all developers to use consistent markup, styles, and behavior in their prototype and production work.**


## Installing
There are a few ways to get started. Before installing Carbon Components, make sure you set up your [SSH key on GitHub](https://help.github.com/articles/connecting-to-github-with-ssh/) You may also need to set up your SSH key on **Jenkins** or **Travis** if you use those for continuous integration or deployment.

### npm
Carbon Components is published to a private npm registry maintained by Bluemix Ops Console team.

Before installing with npm, you must create an **.npmrc** file - you can create this in the root of your project folder or on your computer's ~ directory.

```
$ touch .npmrc
```

Next, write the following into your **.npmrc** file:

```
//dev-console-npm.stage1.ng.bluemix.net/:_authToken="u6vjQywpRv51/eKBiRcAFA=="@console:registry=https://dev-console-npm.stage1.ng.bluemix.net
```

If you haven't done so already, create a **package.json** for your project:

```
$ npm init
```

Finally, install Carbon Components with **npm.**

```
$ npm install @console/bluemix-components --save
```

### Bower
We also publish Carbon Components to a private bower registry.

It's required to set up your [SSH Key on GitHub](https://help.github.com/articles/connecting-to-github-with-ssh/) and on **Jenkins** or **Travis** if you use those as well.

Create a **bower.json** file:

```
$ bower init
```

Create a **.bowerrc** file in the root of your project directory and write the following config:

```
{ "registry": "http://9.37.228.216:5678/" }
```

Finally, install the bower package.

```
$ bower install bluemix-components --save
```


## Download

* Download the latest version of the [Carbon Component Library]()
* See [tags]() on GitHub Enterprise for older versions.
* See [releases]() for release notes and changelogs.