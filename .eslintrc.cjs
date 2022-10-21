module.exports = {
  env: {
    browser: true,
    es2021:  true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react-hooks/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion:  'latest',
    ecmaFeatures: {
      jsx: true
    },
    project:    './tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    'no-multi-spaces':                                  'off',
    'key-spacing':                                      ['error', {align: 'value'}],
    '@typescript-eslint/consistent-type-definitions':   'off',
    '@typescript-eslint/type-annotation-spacing':       ['error', { before: false, after: false, overrides: { arrow: { before: true, after: true } } }],
    '@typescript-eslint/object-curly-spacing':          ['error', 'never'],
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions':    ['warn', {allowNullableString: true,
      allowNullableBoolean: true,
      allowNullableObject: true}],
    '@typescript-eslint/space-infix-ops':               'off',
    '@typescript-eslint/restrict-plus-operands':        'warn',
    'react/react-in-jsx-scope':                         'off',
    'react-hooks/rules-of-hooks':                       'error',
    'react-hooks/exhaustive-deps':                      'warn'
  }
}
