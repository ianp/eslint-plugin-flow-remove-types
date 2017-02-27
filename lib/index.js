/**
 * @fileoverview A preprocessor to remove Flow type annotations.
 * @author Ian Phillips
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const flowRemoveTypes = require('flow-remove-types')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  processors: {
    '.js': {
      _parseErrors: {},
      preprocess: function(text, filename) {
        let output;
        try {
          output = flowRemoveTypes(text);
        } catch (err) {
          this._parseErrors[filename] = err;
          return [''];
        }
        this._parseErrors[filename] = null;
        return [output.toString()];
      },
      postprocess: function(messages, filename) {
        const err = this._parseErrors[filename];
        if (err) {
          return [{
            ruleId: null,
            fatal: true,
            severity: 2,
            source: null,
            message: `Flow parse failed: ${err.message}`,
            line: err.loc && err.loc.line,
            column: err.loc && err.loc.column
          }];
        }
        return messages[0];
      }
    }
  }
}

