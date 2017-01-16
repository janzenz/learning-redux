var webpack = require('webpack')
var path = require('path')

// Represent the directory path of the bundle file output
var BUILD_DIR = path.resolve(__dirname, 'public/assets/js/')
// Holds the directory path of the application codebase
var APP_DIR = path.resolve(__dirname, 'src/')

var config = {
    // Specifies the entry file where the bundling process starts.
    // It also supports multiple entry points.
    entry: APP_DIR + '/index.js',
    // Instructs Webpack what to do after the bundling process has been completed.
    // Here we are instructing it to output the bundled file under BUILD_DIR with the
    //  name of bundle.js
    output: {
        path: BUILD_DIR, // string
        // the target directory for all output files
        filename: 'bundle.js',
        // the filename template for entry chunks
        publicPath: '/assets/js/'
        // the url to the output directory resolved relative to the HTML page
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Accepts both .js and .jsx files using regex
                include: [
                    APP_DIR // Specifies what is the directory to be used to look for those recursively
                ],
                //issuer: {test, include},
                // Loader are what Webpack uses to transpile the code base and translate it to
                //  a browser readable version. Here the *loaders* property accepts an array of
                //  loaders.
                loader: 'babel-loader' // Represents the name of the loader
            }
        ]
    },
    devtool: "cheap-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 8080,
        historyApiFallback: true
    }
}

module.exports = config

