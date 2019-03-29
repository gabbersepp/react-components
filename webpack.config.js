const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = function(env) 
{ 
  const dev = env === "dev";
  const externals = dev ? {} : {
    'react': 'react',
    'react-dom': 'react-dom'
  };
  const plugins = [];

  if (dev) {
    plugins.push(new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }));
  }

  plugins.push(new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "jb-react-components.css"
  }));

  // index-bundle must be .ts to force tsc to create a definition file!
  return {
    entry: dev ? "./src/index.js" : "./src/index-bundle.ts",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: "source-map",
    output: {
      filename: "jb-react-components.js",
      path: path.join(__dirname, "./dist/"),
      libraryTarget: "umd"
    },
    mode: dev ? "development" : "production",
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader"
          }
        },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                      name: '[path][name].[ext]',
                      context: path.resolve(__dirname, "src/"),
                      outputPath: './'
                  }
              }
          ] 
        },
      ]
    },
    plugins: plugins,
    externals: externals
  }};