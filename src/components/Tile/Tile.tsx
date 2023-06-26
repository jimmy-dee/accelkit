import cn from 'classnames';
import { createElement, FC } from 'react';

import { createHeadingId } from '../../utils/id-generators';
import Heading from '../Heading/Heading';

interface Props {
  /** optional override for the html element, div by default */
  as?: string;
  /** an optional property to enable a border, this will inherit the font colour specified */
  border?: boolean;
  /** this is the contents of the heading element */
  children: React.ReactNode;
  /** an optional property to pass custom css classes */
  className?: string;
  /** a required property to set the heading or title to describe the contents of the tile */
  heading: string;
  /** a required property to set a unqiue id for the element */
  id: string;
  /** an optional property to make the corners rounded */
  rounded?: boolean;
  /** an optional property to make the tile heading only visible to screen readers */
  srOnly?: boolean;
}

const Tile: FC<Props> = ({ as = 'div', border, children, className, heading, id, rounded, srOnly }) => {
  const headingId = createHeadingId(id);

  const content = (
    <>
      <Heading
        className={cn(srOnly && 'sr-only')}
        id={headingId}
      >
        {heading}
      </Heading>
      <p>
        {children}
      </p>
    </>
  );

  return createElement(
    as,
    {
      ariaLabelledBy: headingId,
      className: cn('p-3', border && 'border border-inherit', rounded && 'rounded-md', className),
      id,
    },
    content,
  );
};

export default Tile;
