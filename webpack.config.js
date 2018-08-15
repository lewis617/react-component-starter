const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const config = {
    entry: argv.mode === 'development' ? './demo/index' : './src/index',
    output: {
      libraryTarget: 'umd',
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
      antd: {
        root: 'antd',
        commonjs2: 'antd',
        commonjs: 'antd',
        amd: 'antd',
      },
      'prop-types': {
        root: 'PropTypes',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types',
      },
    },
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
          test: /\.(less)|(css)$/,
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
