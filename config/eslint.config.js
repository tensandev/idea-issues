module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // TypeScript用パーサー
  parserOptions: {
    ecmaVersion: 2020, // 最新のECMAScript仕様
    sourceType: 'module', // ES Modules対応
    ecmaFeatures: {
      jsx: true, // JSXをサポート
    },
    project: ['./tsconfig.json'], // tsconfigを参照して型情報も利用
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript基本ルール
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // 型チェックが必要なルール
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // Prettierと競合するルールを無効化
  ],
  rules: {
    // 型安全に関わるルールを厳格に
    '@typescript-eslint/no-explicit-any': 'error', // any型はできるだけ避ける
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }], // 戻り値の型は明示推奨
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 未使用変数はエラー、ただし_始まりは許容
    '@typescript-eslint/explicit-module-boundary-types': 'error'

    // コード品質と可読性
    'no-console': 'warn', // console.logは警告（必要に応じてoff可能）
    'no-debugger': 'error', // debuggerはエラー
    'consistent-return': 'error', // 関数は一貫した戻り値を持つべき
    'prefer-const': 'error', // 変更されない変数はconstを使う
    'react/react-in-jsx-scope': 'off', // React 17以降は不要

    // React Hooksルール（必須）
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // その他必要に応じて調整可能
  },
  settings: {
    react: {
      version: 'detect', // インストール済みReactバージョンを自動検出
    },
  },
};
