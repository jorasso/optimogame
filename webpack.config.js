const path = require('path');
const publicFolder = 'dist';

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: "./src_ts/main.ts",
    output: {
        path: path.join(__dirname, publicFolder),
        filename: 'game.js',
        publicPath: '/'    
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(path.join(__dirname, 'node_modules'))]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                    filename: "vendors.js"
                }
            }
        }
    }
};