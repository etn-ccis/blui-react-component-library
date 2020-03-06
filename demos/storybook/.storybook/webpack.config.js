const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = ({ config }) => {
    config.module.rules.push({
        include: [path.resolve(__dirname, '../stories')], // You can specify directories
        test: /\.(tsx)$/,
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
                options: { noImplicitAny: false },
            },
            {
                loader: require.resolve('@storybook/source-loader'),
                options: { parser: 'typescript' },
            },
        ],
        enforce: 'pre',
    });
    config.module.rules.push({
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
        ],
    });
    config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }));
    config.watchOptions = { ignored: [/node_modules([\\]+|\/)+(?!@pxblue)/] };
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
