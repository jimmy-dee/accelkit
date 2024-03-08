import cn from 'classnames';
import { HTMLAttributes } from 'react';

type TextSize = 'base' | 'xs' | 'small' | 'large';

interface Props extends HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span';
  children: React.ReactNode;
  className?: string;
  size?: TextSize;
}

const textSizes: { [S in TextSize]: string } = {
  base: 'text-base',
  large: 'text-lg',
  small: 'text-sm',
  xs: 'text-xs',
};

const Text = ({ as: Element = 'p', children, className = '', size = 'base', ...props }: Props) => {
  return (
    <Element
      className={cn(textSizes[size], className)}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Text;
