import path from "path";
import { BuildOptions } from "./types/config";
import webpack from 'webpack';
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    
    const {paths, mode, isDev} = options;
    
    return {
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        mode,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
          },
        resolve: buildResolves(),
        devtool: isDev ? 'inline-source-map' : undefined,
    }
}