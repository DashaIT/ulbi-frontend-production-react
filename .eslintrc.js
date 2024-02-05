module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['airbnb', 'plugin:react/recommended', 'plugin:i18next/recommended'],
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
                '**/src/**/*.{test,stories}.{ts,tsx}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-console': 'off',
        'i18next/no-literal-string':
            ['warn',
                {
                    markupOnly: true,
                    ignoreAttribute: ['data-testid', 'to'],
                },
            ],
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        'linebreak-style': ['error', 'unix'],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'react/display-name': 'off',
        'no-undef': 'off',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },

};
