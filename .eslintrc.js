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
    '@vue/standard',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // I am going against recommended convension here as a matter of
    // preference and consistancy. Vue recomments that props and events
    // be camelCase in component scripts, but kabab-case in component
    // templates. This creates a casing mismatch between the two lands
    // that is unnecessary. It follows the convention of each language,
    // but also adds some confusion for new users when trying to track down
    // how components are passing information. It all gets parsed away,
    // and a component template isn't really raw html, but a mix of html
    // tags and component logic. I prefer to be more explicit about what
    // is an html tag and what is a component tag.
    'vue/component-name-in-template-casing': [
      'warn',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    'vue/v-on-event-hyphenation': [
      'error',
      'never',
      {
        autofix: true
      }
    ],
    'vue/attribute-hyphenation': ['error', 'never']
  }
}
