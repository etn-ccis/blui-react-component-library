# PX Blue React Components

[![](https://img.shields.io/circleci/project/github/pxblue/react-component-library/master.svg?style=flat)](https://circleci.com/gh/pxblue/react-component-library/tree/master)
![npm](https://img.shields.io/npm/v/@pxblue/react-components?label=%40pxblue%2Freact-components)

This is a library of re-usable React components for use in PX Blue applications. For the most part, these components are meant to simplify building your application by providing drop-in components that implement common use cases in PX Blue and eliminate the need for multiple teams to build their own components for these.

Refer to the [Component Library](https://pxblue-components.github.io/react/?path=/story/channel-value--with-value) API documentation site for a list of available components or see the repository [documentation](https://github.com/pxblue/react-component-library/tree/dev/docs) for each individual component.

## Installation

To install the PX Blue react components from NPM as a dependency for your project, you can run the following command in your project root:

```
yarn add @pxblue/react-components
```

> **NOTE**: This install command will install the package from NPM. If you are a PX Blue developer working with components locally, you will want to follow the manual linking instructions - see below.

## Building the Library

To work with this library, first clone down the repository and install dependencies:

```
git clone https://github.com/pxblue/react-component-library
cd react-component-library
yarn install:dependencies
```

The library can be built by running the following command. The resulting output will be in the /dist folder.

```
yarn build
```

## Running the demo projects

This repository comes with two demo projects found within the `/demos` folder.
The first is a [Storybook](https://storybook.js.org/) application that allows you to see the components in isolation and interact with their properties. The second is a Showcase project that shows a combination of components in the context of a realistic interface.

You can build, link, and start the demo applications in a single step by calling either

```
yarn start:showcase
```

or

```
yarn start:storybook
```

from the root directory.

## Using the Components

See the [documentation](https://github.com/pxblue/react-component-library/tree/dev/docs) for information on using these components.
