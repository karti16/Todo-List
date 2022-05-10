const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',

  entry: {
    bundle: path.resolve(__dirname, './src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    watchFiles: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'src/**/*'),
    ],

    port: 6600,
    allowedHosts: ['lap'],
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.mjs', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo List',
      filename: 'index.html',
      template: './src/template.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/img'),
          to: 'img',
          noErrorOnMissing: true,
        },
      ],
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
