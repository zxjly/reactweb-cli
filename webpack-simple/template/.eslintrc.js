// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  "exmaFeatures": {
    "jsx": true,
    "modules": true,
    "experimentalObjectRestSpread": true
  },
  "parserOptions": {
    sourceType: 'module',
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  env: {
    browser: true,
    "es6": true,
    "node": true,
    "commonjs": true
  },
  {{#if_eq lintConfig "standard"}}
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  {{/if_eq}}
  {{#if_eq lintConfig "airbnb"}}
  extends: 'airbnb-base',
  {{/if_eq}}
  "installedESLint": true,
    "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
        "jsx": true,
        "arrowFunctions": true,
        "classes": true,
        "modules": true,
        "defaultParams": true
    },
    "sourceType": "module"
  },
  // required to lint *.vue files
  plugins: [
    "react",
    "babel",
    'html'
  ],
  {{#if_eq lintConfig "airbnb"}}
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  {{/if_eq}}
  // add your custom rules here
  'rules': {
    {{#if_eq lintConfig "standard"}}
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    {{/if_eq}}
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "func-names": 0,
    "max-len": ["error", 120, 4, {
    "comments": 80
  }],
    "indent": ["error", 2],
    "react/jsx-indent": [2, 2],
    "semi": 0,
    "react/sort-comp": 0,
    "react/prop-types": 0,
    "react/prefer-es6-class": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-filename-extension": 0,
    "no-return-assign": 0,
    "react/no-multi-comp": 0,
    "array-callback-return": 0,
    "no-underscore-dangle": 0,
    "no-bitwise": ["error", {
    "allow": ["~"]
  }],
    "no-plusplus": 1,
    "no-unused-expressions": ["warn", { "allowShortCircuit": true, "allowTernary": true}],
    "import/no-unresolved": 0,
    //remove the import/no-extraneous-dependencies errors
    "import/no-extraneous-dependencies": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/img-has-alt": 0,
    "no-unused-vars": 0,
    "no-param-reassign": ["error", {
    "props": false
  }],
    "object-shorthand": 0
  }
}
