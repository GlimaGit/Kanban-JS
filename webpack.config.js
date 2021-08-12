const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "build"),

    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    "css-loader",
                ]
            },
            {
                test: /.(?:ico|png|jpeg|jpg)$/i,
                type: 'asset/resource',
            },
        ]
    },
}
