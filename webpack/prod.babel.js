import { optimize, LoaderOptionsPlugin } from 'webpack';
import baseConfig from './base';

export default {
    ...baseConfig,
    plugins: [
        ...baseConfig.plugins,
        new optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: true
            }
        }),
        new LoaderOptionsPlugin({
            minimize: true
        })
    ]
};