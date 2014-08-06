/*global console*/
console.log('root.jsx loaded');
define(function(require) {
    'use strict';

    var React = require('react');
    var Hello = require('jsx!hello');

    var $ = require('jquery');
    var _ = require('underscore');

    return React.createClass({
        render: function() {
            return <div>
                <Hello name="JSX" />
                <p>React {React.version} is loaded</p>
                <p>jQuery {$.fn.jquery} is loaded</p>
                <p>Underscore {_.VERSION} is loaded</p>
            </div>;
        }
    });
});
