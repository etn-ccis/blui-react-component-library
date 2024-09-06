const { addAfterLoader, loaderByName } = require('@craco/craco');

const remarkGfm = require('remark-gfm');

module.exports = {
    webpack: {
        configure(webpackConfig) {
            addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
                test: /\.mdx?$/,
                use: [
                    { loader: 'babel-loader', options: {} },
                    {
                        loader: '@mdx-js/loader',
                        /** @type {Options} */
                        options: {}
                    }
                ]
            });

            return webpackConfig;
        },
    },
};
