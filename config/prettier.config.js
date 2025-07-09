/** @type {import("prettier").Config} */
module.exports = {
  semi: true, // セミコロンを付ける
  singleQuote: true, // シングルクォートを使用
  trailingComma: 'es5', // 配列やオブジェクトの末尾にカンマ（ES5に準拠）
  printWidth: 100, // 1行の最大長
  tabWidth: 4, // インデント幅
  useTabs: false, // スペースでインデント
  bracketSpacing: true, // オブジェクトリテラルの中のスペース { foo: bar }
  arrowParens: 'always', // アロー関数の引数が1つでも () を付ける
  jsxSingleQuote: false, // JSXではダブルクォートを使う
  endOfLine: 'lf', // 改行コードをLFに統一（Unix系）
};
