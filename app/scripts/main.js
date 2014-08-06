/*global console*/
console.log('main.js loaded');

require.config({
    baseUrl: 'scripts',
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        underscore: '../../bower_components/underscore/underscore',
        react: '../../bower_components/react/react-with-addons',
        text: 'vendor/text',
        jsx: 'vendor/jsx',
        JSXTransformer: 'vendor/JSXTransformer'
    },
    jsx: {
        fileExtension: '.jsx'
    },
    shim: {
        'jquery': {
            deps: [],
            exports: '$'
        },
        'underscore': {
            deps: [],
            exports: '_'
        }
    }
});

require(['react', 'jsx!root'], function(React, root) {
    'use strict';
    React.renderComponent(root(), document.getElementById('root'));
});
