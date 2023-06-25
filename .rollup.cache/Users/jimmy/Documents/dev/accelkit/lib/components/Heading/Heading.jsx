// import cn from 'classnames';
import { createElement } from 'react';
// type Variant = 'default' | 'display' | 'sub';
const Heading = ({ children, id, level = 2 }) => {
    return createElement(`h${level}`, {
        className: 'greeting',
        id,
    }, children);
};
export default Heading;
//# sourceMappingURL=Heading.jsx.map