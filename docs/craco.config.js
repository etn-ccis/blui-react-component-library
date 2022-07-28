const { addAfterLoader, loaderByName } = require('@craco/craco');

const remarkGfm = require('remark-gfm');

module.exports = {
    webpack: {
        configure(webpackConfig) {
            addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
                test: /\.mdx?$/,

                loader: '@mdx-js/loader',

                options: {
                    providerImportSource: '@mdx-js/react',

                    remarkPlugins: [remarkGfm],
                },
            });

            return webpackConfig;
        },
    },
};
