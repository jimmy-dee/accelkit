import cn from 'classnames';
import React, { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id, title, ...props }: Props) => {
  return (
    <section
      className={cn('py-6 md:py-8 w-full', className)}
      id={`${id}-section`}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-3 md:px-10 xl:px-24 w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
