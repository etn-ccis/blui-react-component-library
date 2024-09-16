const { addAfterLoader, loaderByName } = require('@craco/craco');
// const remarkGfm = require('remark-gfm');

module.exports = module.exports = async (env) => {
    const remarkGfm = (await import('remark-gfm')).default
return{
    webpack: {
        configure(webpackConfig) {
            addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
                test: /\.mdx?$/,
                use: [
                    { loader: 'babel-loader', options: {} },
                    {
                        loader: '@mdx-js/loader',
                        /** @type {Options} */
                        options: {
                            remarkPlugins: [remarkGfm],
                        providerImportSource: '@mdx-js/react',   
                        }
                    }
                ]
            });

            return webpackConfig;
        },
    },
}
};
