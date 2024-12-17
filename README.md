## Brightlayer UI React Components

[![Build](https://github.com/etn-ccis/blui-react-component-library/actions/workflows/blui-ci.yml/badge.svg?branch=master)](https://github.com/etn-ccis/blui-react-component-library/actions/workflows/blui-ci.yml)
![npm](https://img.shields.io/npm/v/@brightlayer-ui/react-components?label=%40brightlayer-ui%2Freact-components) [![codecov](https://codecov.io/gh/etn-ccis/blui-react-component-library/branch/master/graph/badge.svg?token=HQFW5YF7WP)](https://codecov.io/gh/etn-ccis/blui-react-component-library)

This is a library of re-usable React components for use in Brightlayer UI applications. For the most part, these components are meant to simplify building your application by providing drop-in components that implement common use cases in Brightlayer UI and eliminate the need for multiple teams to build their own components for these.

Refer to the [Component Library](https://brightlayer-ui-components.github.io/react) API documentation site for a list of available components and the document for each individual component.

## Installation

To install the Brightlayer UI react components from NPM as a dependency for your project, you can run the following command in your project root:

```shell
yarn add @brightlayer-ui/react-components
```

## Usage

See the [developer documentation](https://brightlayer-ui-components.github.io/react) site for detailed information on using these components.

> For use with MUI 6+, you must be using version 7 of @brightlayer-ui/react-components and version 8 of @brightlayer-ui/react-themes.

## Migration from v6 to v7

With the release of version 7, Brightlayer UI React Components have been updated to use Material UI v6. The usage of the BLUI components remains the same, but there may be some updates required in your project to migrate to MUI v6.

You can refer to the official [MUI Migration Documentation](https://mui.com/material-ui/migration/upgrade-to-v6/) for details on the steps to upgrade. This will include:

- updating dependency versions
- updating any custom themes (BLUI themes have already been updated for you)
- component API changes / deprecations

## Browser Support

Brightlayer UI libraries will work with any modern browser. For details, please refer to our [Browser Support](https://brightlayer-ui.github.io/development/frameworks-web/react#browser-support) documentation.

# For Maintainers

## Building the Library

To work with this library, first clone down the repository and install dependencies:

```shell
git clone https://github.com/etn-ccis/blui-react-component-library
cd react-component-library
yarn initialize
```

The library can be built by running the following command. The resulting output will be in the /dist folder.

```shell
yarn build
```

## Running the demo project and React Component Library API Docs

This repository comes with a demo project found within the `/demos` folder.
The Showcase project (from [react-showcase-demo](https://github.com/etn-ccis/blui-react-showcase-demo)) that shows a combination of components in the context of a realistic interface.

The [react-showcase-demo](https://blui-react-showcase.web.app/templates/dashboard) is deployed as part of the Brightlayer UI continuous integrations.

The second project found within the /docs folder is the [React Component Library](https://github.com/etn-ccis/blui-react-component-library/tree/master/docs) API documentation that allows you to see the components in isolation and interact with their properties.

The [React Component Library](https://brightlayer-ui-components.github.io/react/) is deployed as part of the Brightlayer UI continuous integrations.

You can build, link, and start the applications in a single step by running

```shell
yarn start:showcase
```

or

```shell
yarn start:docs
```

from the root directory.
