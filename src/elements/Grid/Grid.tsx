import cn from 'classnames';

interface Props extends React.HTMLAttributes<HTMLElement> {
  as?: 'div';
  children: React.ReactNode;
  cols?: number;
  gap?: 'gap-4' | 'gap-6';
}

const columns: { [key: number]: string } = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

const Grid = ({ as: Element = 'div', children, className, cols = 1, gap = 'gap-4', ...props }: Props) => {
  return (
    <Element
      className={cn(
        'grid',
        gap,
        columns[cols],
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Grid;
