const output = require('./output');
const optimization = require('./optimization');
const resolve = require('./resolve');
const rules = require('./rules');
const plugins = require('./plugins');
const devServer = require('./devServer');

module.exports = (env, argv, basePath, callback, title) => {
    const production = argv.mode === 'production';
    basePath = basePath || '/';
    title = title || 'Web React';

    const config = {
        entry: './App.tsx',
        target: 'web',
        output: output(env, argv, basePath),
        optimization,
        resolve,
        module: {
            rules,
        },
        plugins: plugins(basePath, title),
        devtool: production ? '' : 'inline-source-map',
        devServer: devServer(basePath),
    };

    if (callback) {
        callback(config);
    }

    return config;
};
