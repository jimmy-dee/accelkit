// import cn from 'classnames';
import { createElement, FC } from 'react';
// import s from './Heading.module.css';

export interface Props {
  children: React.ReactNode;
  // className?: string;
  // color?: string;
  id: string;
  level?: Level;
  // levelStyle? : Level;
  // variant?: Variant;
}

type Level = 1 | 2 | 3 | 4 | 5;
// type Variant = 'default' | 'display' | 'sub';

const Heading: FC<Props> = ({ children, id, level = 2 }) => {

  return createElement(
    `h${level}`,
    {
      className: 'greeting',
      id,
    },
    children,
  );
};

export default Heading;
