const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const config = {
    entry: argv.mode === 'development' ? './demo/index' : './src/index',
    plugins: [
      new MiniCssExtractPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: argv.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
            }, {
              loader: 'css-loader' // translates CSS into CommonJS
            }, {
              loader: 'less-loader' // compiles Less to CSS
            }]
        }
      ]
    }
  };

  return config;
};
