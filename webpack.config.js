const path = require("path");
const entryFile = "task01.js";

module.exports = {
    entry: ['./js/app.js','./scss/main.scss'],
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "./build"
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, "/"),
        publicPath: "/build/",
        compress: true,
        port: 3002,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/[name].blocks.css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
        ]
    }
};
