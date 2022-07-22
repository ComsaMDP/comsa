import clsx from 'clsx';
import { BaseProps } from '../app/types';

interface Props extends BaseProps {
  type?: 'primary' | 'light' | 'dark';
  onClick?: () => any;
}

export const Button = ({ children, className, type = 'light', onClick }: Props) => {
  const base =
    'px-4 py-1 rounded-full border-2 shadow-sm font-medium transition duration-300 text-white active:brightness-95 text-base';
  const primary = 'border-primary bg-primary hover:bg-gray-100 hover:text-primary';
  const light = 'border-gray-100 hover:bg-gray-100 hover:text-slate-900';
  const dark = 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-gray-100';

  const styles = clsx(base, { primary, light, dark }[type], className);

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};
