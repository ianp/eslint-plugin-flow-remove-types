/**
 * @fileoverview A preprocessor to remove Flow type annotations.
 * @author Ian Phillips
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const flowRemoveTypes = require('flow-remove-types')
const requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  processors: {
    '.js': {
      preprocess: (text, filename) => [flowRemoveTypes(text)],
      postprocess: (messages, filename) => messages[0]
    }
  }
}

