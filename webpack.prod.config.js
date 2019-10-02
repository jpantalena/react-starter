const path = require("path");

module.exports = {
  entry: "./src/index.js",
  devtool: "sourcemaps",
  cache: true,
  mode: "production",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, '.'),
        exclude: /(node_modules)/,
        use: [{
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
            }
        }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: './media'
          }
        }]
      }
    ]
  }
};