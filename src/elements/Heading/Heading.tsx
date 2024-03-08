import cn from 'classnames';

import s from './Heading.module.css';

export type Level = 1 | 2 | 3 | 4 | 5;

export interface Props extends React.HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  level?: Level;
}

const Heading = ({ children, className, id, level = 2, ...props }: Props) => {
  const Element = `h${level}` as const;

  return (
    <Element
      className={cn('font-bold leading-tight', className, s[Element])}
      id={id && `${id}-heading`}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Heading;