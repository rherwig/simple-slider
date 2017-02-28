import { HotModuleReplacementPlugin } from 'webpack';
import baseConfig from './base';

const host = '0.0.0.0';
const port = 8080;

export default {
    ...baseConfig,
    entry: [
        `webpack-dev-server/client?http://${host}:${port}`,
        'webpack/hot/only-dev-server',
        ...baseConfig.entry
    ],
    devtool: '#inline-source-map',
    devServer: {
        host,
        port,
        stats: {
            colors: true
        }
    },
    plugins: [
        ...baseConfig.plugins,
        new HotModuleReplacementPlugin()
    ]
};
