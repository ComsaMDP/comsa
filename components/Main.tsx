interface Props {
  children: React.ReactNode;
}

export const Main = ({ children }: Props) => {
  return <main className="z-10 w-full overflow-hidden">{children}</main>;
};
