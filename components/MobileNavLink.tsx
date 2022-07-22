import clsx from 'clsx';
import { BaseProps } from '../app/types';

interface Props extends BaseProps {
  onClick: () => any;
}

export const MobileNavLink = ({ children, className, onClick }: Props) => {
  const styles = 'flex items-center justify-center h-20 font-semibold text-lg cursor-pointer';

  return (
    <li>
      <a className={clsx(styles, className)} onClick={onClick}>
        {children}
      </a>
    </li>
  );
};
