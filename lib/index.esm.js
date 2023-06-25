import { createElement } from 'react';

// import cn from 'classnames';
// type Variant = 'default' | 'display' | 'sub';
const Heading = ({ children, id, level = 2 }) => {
    return createElement(`h${level}`, {
        className: 'greeting',
        id,
    }, children);
};

export { Heading as default };
//# sourceMappingURL=index.esm.js.map
