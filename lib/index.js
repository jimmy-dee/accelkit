'use strict';

var react = require('react');

// import cn from 'classnames';
// type Variant = 'default' | 'display' | 'sub';
const Heading = ({ children, id, level = 2 }) => {
    return react.createElement(`h${level}`, {
        className: 'greeting',
        id,
    }, children);
};

module.exports = Heading;
//# sourceMappingURL=index.js.map
