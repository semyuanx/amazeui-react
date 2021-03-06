'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var AvgGrid = require('./AvgGrid');
var omit = require('object.omit');

var Thumbnails = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'thumbnails'
    };
  },

  render: function() {
    var classes = classNames(this.getClassSet(), this.props.className);
    var restProps = omit(this.props, Object.keys(this.constructor.propTypes));

    return (
      <AvgGrid
        {...restProps}
        className={classes}
      >
        {React.Children.map(this.props.children, function(child, i) {
          return (
            <li key={i}>
              {child}
            </li>
          );
        })}
      </AvgGrid>
    );
  }
});

module.exports = Thumbnails;
