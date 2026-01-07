const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const isProduction = true;

const FRONTEND_FILES_URL = '/';

const ROOT_DIR = path.join(__dirname, '.');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        compact: false,
                        minified: false,
                        targets: '>0.25% in US and not dead and last 5 versions',
                        presets: [
                            [
                                '@babel/preset-env',
                                {}
                            ]
                        ],
                        // This makes it so that node_modules gets transpiled
                        exclude: []
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js'],
    },
    output: {
        path: DIST_DIR,
        publicPath: FRONTEND_FILES_URL,
        filename: '[name]-[contenthash].js'
    },
    devServer: {
        historyApiFallback: true,
        static: DIST_DIR,
        port: 443,
        server: {
            type: 'https'
        }
    },
    optimization: {
        mangleExports: 'size',
        moduleIds: 'size',
        minimize: isProduction,
    },
    plugins: [
        new HtmlWebPackPlugin({
            publicPath: FRONTEND_FILES_URL,
            inject: true
        })
    ]
};;