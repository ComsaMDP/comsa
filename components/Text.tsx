import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ className, ...rest }: Props) => (
  <h2 className={clsx('font-semibold text-3xl md:text-4xl', className)} {...rest} />
);

export const Subtitle = ({ className, ...rest }: Props) => (
  <h3 className={clsx('font-semibold text-2xl', className)} {...rest} />
);

export const B = ({ className, ...rest }: Props) => <b className={clsx('font-semibold', className)} {...rest} />;

export const Paragraph = ({ className, ...rest }: Props) => <p className={clsx('font-light', className)} {...rest} />;
