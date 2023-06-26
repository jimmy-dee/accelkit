// import cn from 'classnames';
import { createElement, FC } from 'react';

import { createHeadingId } from '../../utils/id-generators';
import Heading from '../Heading/Heading';

interface Props {
  /** optional override for the html element, div by default */
  as?: string;
  /** this is the contents of the heading element */
  children: React.ReactNode;
  /** heading or title to describe the contents of the tile */
  heading: string;
  /** a unqiue id for the element */
  id: string;
}

const Tile: FC<Props> = ({ as = 'div', children, heading, id }) => {
  const headingId = createHeadingId(id);

  const content = (
    <>
      <Heading id={headingId}>
        {heading}
      </Heading>
      {children}
    </>
  );

  return createElement(
    as,
    {
      ariaLabelledBy: headingId,
      className: '',
      id,
    },
    content,
  );
};

export default Tile;
