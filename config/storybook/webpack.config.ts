import webpack, { RuleSetRule } from 'webpack'
import { BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx')

    // eslint-disable-next-line no-param-reassign
    // config?.module?.rules = config?.module?.rules.map((rule: RuleSetRule) => {
    //     if (/svg/.test(rule.test as string)) {
        //         return { ...rule, exclude: /\.svg$/i };
        //     }

        //     return rule;
        // });
    const rules = config.module!.rules as RuleSetRule[]
    config.module!.rules = rules.map((rule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    })

    config.module?.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })

    config.module?.rules?.push(buildCssLoaders(true));
    return config
}