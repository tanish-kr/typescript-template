const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/ts/app.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [
                require("cssnano")({
                  preset: "default"
                })
              ]
            }
          },
          {
            loader: "sass-loader",
          },
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    })
  ],
  resolve: {
   extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    filename: "js/app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, "dist")
  }
};