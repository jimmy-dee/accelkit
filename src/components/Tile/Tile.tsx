// import cn from 'classnames';
import { createElement, FC } from 'react';

export interface Props {
  /** optional override for the html element, div by default */
  as?: string;
  /** this is the contents of the heading element */
  children: React.ReactNode;
  /** a unqiue id for the element */
  id: string;
}

const Tile: FC<Props> = ({ as = 'div', children, id }) => {

  return createElement(
    as,
    {
      className: '',
      id,
    },
    children,
  );
};

export default Tile;
