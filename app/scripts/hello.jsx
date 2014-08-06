define(function(require) {
    'use strict';
    var React = require('react');

    return React.createClass({
        render: function() {
            return <div>Hello {this.props.name}!</div>;
        }
    });
});
