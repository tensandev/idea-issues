module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "import", "prettier"],
  rules: {
    // prettier のフォーマット違反はエラー扱い
    "prettier/prettier": ["error"],

    // React 17以降は import React 不要なので警告OFF
    "react/react-in-jsx-scope": "off",

    // 変数宣言はconst優先、変更時はletを使う
    "prefer-const": "error",

    // JSX内でのファイル拡張子はtsx限定（jsxは不可）
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],

    // 使ってない変数は警告（引数で使わない変数は_から始めればOK）
    "no-unused-vars": "warn",

    // import 順序を整える（アルファベット順、外部→内部）
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],

    // JSXのpropsでスプレッド演算子は控えめに
    "react/jsx-props-no-spreading": "off",

    // 関数の戻り値は型推論に任せるが明示型推奨
    "@typescript-eslint/explicit-function-return-type": "warn",

    // console.logは開発時OKだが本番では警告にしたい場合
    "no-console": ["warn", { allow: ["warn", "error"] }],

    // 強制的な改行はPrettierに任せる
    "linebreak-style": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {}, // tsconfig.json のパス解決を有効化
    },
  },
};
