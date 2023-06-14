import cn from 'classnames';
import React, { FC } from 'react';

import s from './Heading.module.css';

export interface Props {
  // as?: string;
  children: React.ReactNode | any;
  // className?: string;
  // color?: string;
  // id?: string;
  // level?: Level;
  // levelStyle? : Level;
  // variant?: Variant;
}

// type Level = 1 | 2 | 3 | 4 | 5;
// type Variant = 'default' | 'display' | 'sub';

const Heading: FC<Props> = ({ children }) => {

  // const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = as as any;

  return (
    <h2>
      {children}
    </h2>
  );
};

export default Heading;
