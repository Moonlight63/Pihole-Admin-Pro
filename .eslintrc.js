module.exports = {
  root: true,

  env: {
    node: true
  },

  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly'
  },

  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/component-name-in-template-casing': ['warn', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: []
    }]
  }
}
