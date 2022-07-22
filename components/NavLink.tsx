import clsx from 'clsx';
import { useState } from 'react';
import { BaseProps } from '../app/types';

interface Props extends BaseProps {
  onClick?: () => any;
}

export const NavLink = ({ children, className, onClick }: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      className={clsx('cursor-pointer relative', className)}
      onClick={onClick}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      <div
        className={clsx(
          'transition-all duration-500 absolute h-0.5 top-full',
          hover ? 'w-full bg-primary' : 'w-0 bg-transparent'
        )}
      />
    </a>
  );
};
