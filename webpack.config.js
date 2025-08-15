const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Gera o HTML e injeta o bundle automaticamente
const CopyWebpackPlugin = require("copy-webpack-plugin"); // Copia arquivos/pastas para a saída final (dist)

module.exports = {
  target: "web", // Define o ambiente de execução (navegador)
  mode: "production", // Ativa otimizações para produção (minificação, tree-shaking)

  entry: path.resolve(__dirname, "src", "index.js"), // Ponto de entrada do app

  output: {
    filename: "bundle.js", // Nome do arquivo final
    path: path.resolve(__dirname, "dist"), // Pasta de saída (⚠️ ideal remover "bundle.js" do path)
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Pasta de arquivos estáticos
      watch: true, // Observa alterações e recarrega
    },
    port: 8080, // Porta do servidor local
    hot: true, // HMR (atualização de módulos sem recarregar a página)
    compress: true, // Gzip para servir arquivos mais rápido
    open: true, // Abre o navegador automaticamente
    liveReload: true, // Recarrega a página quando há alterações
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"), // Modelo base do HTML
      filename: "index.html", // Nome do arquivo HTML gerado
      favicon: path.resolve("src", "assets", "icon.svg"), // Favicon
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"), // Origem dos arquivos
          to: path.resolve(__dirname, "dist", "src", "assets"), // Destino no build final
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/, // Aplica loaders em arquivos CSS
        use: ["style-loader", "css-loader"], // Interpreta CSS e injeta no DOM
      },
      {
        test: /.js$/, // Aplica em arquivos JS
        exclude: /node_modules/, // Ignora bibliotecas externas
        use: {
          loader: "babel-loader", // Transpila JS moderno para compatibilidade
          options: {
            presets: ["@babel/preset-env"], // Define regras de compatibilidade
          },
        },
      },
    ],
  },
};
