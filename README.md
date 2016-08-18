# eslint-plugin-flow-remove-types

A preprocessor to remove Flow type annotations.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-flow-remove-types`:

```
$ npm install eslint-plugin-flow-remove-types --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-flow-remove-types` globally.

## Usage

Add `flow-remove-types` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "flow-remove-types"
    ]
}
```

## Notes

Because of the way `flow-remove-types` preserves whitespace in the processed
files (so that line and column numbers remain accurate), any ESLint rules which
check for whitespace (e.g. `no-irregular-whitespace` and `space-in-parens` )
will likely break.
