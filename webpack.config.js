const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {sourceMap: true, modules: true}
          },
          {
            loader: "sass-loader",
            options: {
              additionalData: "@use 'common/variables' as *;",
              sassOptions: {
                includePaths: ["src/styles"],
              },
            },
          },
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]
};