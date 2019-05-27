const webpack = require('webpack');
const path = require('path');

// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const isProdEnv = false;
const transformInferno = require('ts-transform-inferno').default
const transformClasscat = require('ts-transform-classcat').default

/**
 * webpack配置大全
 */
module.exports = {
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      // options: { silent: true, transpileOnly: true }
      options: {
        getCustomTransformers: () => ({
          before: [transformClasscat(), transformInferno()],
        }),
      },
    }, {
      test: /\.js$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader',
      options: {
        plugins: ['syntax-dynamic-import'],
        presets: ["es2015"]
      }
    }, {
      test: /\.(less|css)$/,
      use: [{
        loader: 'style-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'less-loader',
        options: {
          sourceMap: true,
          strictMath: true,
          noIeCompat: true,
        }
      }]
    }]
  },

  entry: {
    // index: './src/index/view/index.tsx'
    index: './src/index/index.tsx'
    // index: './baseTec/ts/e-ts.ts'
  },

  output: {
    // filename: '[name].[chunkhash].js',
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },

  resolve: {
    // 解析模块请求的选项
    // （不适用于对 loader 解析）

    modules: [
      "node_modules"
    ],
    // 用于查找模块的目录

    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".less"],
    // 使用的扩展名

    alias: {
      // 模块别名列表
      'inferno': isProdEnv ? 'inferno' : path.resolve(require.resolve('inferno/dist/index.dev.esm.js')),

      // 起别名："module" -> "new-module" 和 "module/path/file" -> "new-module/path/file"

      // "only-module$": "new-module",
      // 起别名 "only-module" -> "new-module"，但不匹配 "only-module/path/file" -> "new-module/path/file"

      "_component": path.resolve(__dirname, "_component/"),
      // 起别名 "module" -> "./app/third/module.js" 和 "module/file" 会导致错误
      // 模块别名相对于当前上下文导入
    },
  },

  mode: 'development',

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  },

  // "dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base dist"
  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:6666'
    },
    contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: false, // only errors & warns on hot reload
    // ...
  },
};