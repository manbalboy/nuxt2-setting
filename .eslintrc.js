// eslint 설정
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  plugins: ['prettier'],
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:prettier/recommended'],
  rules: {
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 120,
        bracketSpacing: true,
        arrowParens: 'avoid', // 가능하면 생략 , always 항상 써야한다.
        proseWrap: 'preserve',
        jsxBracketSameLine: false,
        htmlWhitespaceSensitivity: 'strict',
        vueIndentScriptAndStyle: true, // script 영역의 들여쓰기  true false
        endOfLine: 'lf',
      },
    ],
  },
  overrides: [
    {
      files: ['**.spec.js'],
      rules: {
        'no-unused-vars': 0,
      },
    },
  ],
};
