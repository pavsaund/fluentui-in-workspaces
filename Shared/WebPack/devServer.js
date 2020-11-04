module.exports = (basePath) => {
    return {
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 8080,
        publicPath: basePath,
        contentBase: process.cwd(),
        proxy: {
        }
    };
};