const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    watch: true,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    'style-loader', // html파일 head에 style을 직접 적용시킴
                    // miniCssExtractPlugin.loader, 
                    // style-loader와 다르게 css 파일을 만들어주는 역할, 그래서 이 경우에는 [name].html에 link stylesheet 해주어야 함.
                    'css-loader', // CSS 파일들을 읽어주는 역할
                ],
            },
        ],
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}