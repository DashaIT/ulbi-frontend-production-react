import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {

    const tsLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        tsLoaders
    ]
}