import path from "path";
import { BuildOptions } from "./types/config";
import webpack from 'webpack';
import { buildPlagins } from "./buildPlagins";
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    
    const {paths, mode} = options;
    
    return {
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        mode,
        plugins: buildPlagins(options),
        module: {
            rules: buildLoaders(),
          },
        resolve: buildResolves(),
    }
}