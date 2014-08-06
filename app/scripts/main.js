/*global console*/
console.log('main.js loaded');

require.config({
    baseUrl: 'scripts',
    paths: {
        'jquery': '../../bower_components/jquery/dist/jquery',
        'underscore': '../../bower_components/underscore/underscore'
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

require(['jquery', 'underscore'], function($, _) {
    'use strict';
    $('#log')
        .empty()
        .append('<p>jQuery ' + $.fn.jquery + ' is loaded</p>')
        .append('<p>Underscore ' + _.VERSION + ' is loaded</p>');
});
