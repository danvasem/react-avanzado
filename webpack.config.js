const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    //Lo siguiente permite generar el manifest para que sea una PWA
    new WebpackPwaManifestPlugin({
      name: "Petgram - tu app de fotos de mascotas",
      shortname: "Petgram",
      description: "Tu mejor app para las mascotas que tanto te gustan",
      background_color: "#fff",
      theme_color: "#b1a",
      icons: [
        {
          src: path.resolve("src/Assets/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    //Lo siguiente permite trabajar con los Service Workers del navegador
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp("https://(res.cloudinary.com|images.unsplash.com)"),
          handler: "CacheFirst",
          options: {
            cacheName: "images"
          }
        },
        {
          urlPattern: new RegExp("https://petgram-server-danvasem.turok3000.now.sh"),
          handler: "NetworkFirst",
          options: {
            cacheName: "api"
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      }
    ]
  }
};
