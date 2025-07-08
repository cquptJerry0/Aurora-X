import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
            },
        },
        rules: {
            // 自定义规则
        },
    },
    {
        files: ['**/*.vue'],
        plugins: {
            vue: eslintPluginVue,
        },
        languageOptions: {
            parser: eslintPluginVue.parser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
        },
        rules: {
            // Vue 特定规则
        },
    },
    {
        files: ['apps/docs/demos/**/*'],
        ignores: ['**/*'],
    },
] 