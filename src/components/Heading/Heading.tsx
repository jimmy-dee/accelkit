// import cn from 'classnames';
import { createElement, FC } from 'react';

import s from './Heading.module.css';

export interface Props {
  /** this is the contents of the heading element */
  children: React.ReactNode;
  // className?: string;
  /** a unqiue id for the element */
  id: string;
  /** an optional parameter, this is the level of heading we want to set, by default set to 2  */
  level?: Level;
  // levelStyle? : Level;
  // variant?: Variant;
}

export type Level = 1 | 2 | 3 | 4 | 5;
// type Variant = 'default' | 'display' | 'sub';

const Heading: FC<Props> = ({ children, id, level = 2 }) => {

  return createElement(
    `h${level}`,
    {
      className: s[`heading-${level}`],
      id,
    },
    children,
  );
};

export default Heading;
