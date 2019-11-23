const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = function(env) 
{ 
  const dev = env === "dev";
  const externals = dev ? {} : {
    "react": {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    "react-dom": {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  };
  const plugins = [];

  if (dev) {
    plugins.push(new HtmlWebPackPlugin({
      template: "./test/index.html",
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
    entry: dev ? "./test/index.js" : "./src/index-bundle.ts",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: "source-map",
    output: {
      filename: "jb-react-components.js",
      path: path.join(__dirname, "./dist/"),
      libraryTarget: "umd",
      library: "ReactComponents"
    },
    mode: dev ? "development" : "production",
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              configFile: dev ? 'tsconfig.json' : 'tsconfig.prod.json'
            }
          }
        },
        {
            test: /\.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        },
        {
          test: /\.(png|jpg|gif|svg|ttf)$/,
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