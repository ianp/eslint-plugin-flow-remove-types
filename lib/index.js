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
      preprocess: (text, filename) => [flowRemoveTypes(text).toString()],
      postprocess: (messages, filename) => messages[0]
    }
  }
}

