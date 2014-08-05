/**
 * @fileoverview Rule to flag when a function has too many parameters
 * @author Ilya Volodin
 * @author Victor Homyakov
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    var numParams = context.options[0] || 3;

    return {

        "FunctionDeclaration": function(node) {
            if (node.params.length > numParams) {
                context.report(node, "This function declaration has too many parameters ({{count}}). Maximum allowed is {{max}}.", {
                    count: node.params.length,
                    max: numParams
                });
            }
        },

        "FunctionExpression": function(node) {
            if (node.params.length > numParams) {
                var parent = node.parent;
                if (parent && parent.parent && parent.parent.type === 'ExpressionStatement' &&
                        parent.parent.expression.type === 'CallExpression' &&
                        (parent.parent.expression.callee.name === 'define' || parent.parent.expression.callee.name === 'require')
                    ) {
                    // ignore max-params in define() and require()
                    return;
                }
                context.report(node, "This function expression has too many parameters ({{count}}). Maximum allowed is {{max}}.", {
                    count: node.params.length,
                    max: numParams
                });
            }
        }
    };

};
