interface Props {
  children: React.ReactNode;
}

export const Main = ({ children }: Props) => {
  return (
    <main className="z-10 flex w-full flex-col gap-12 overflow-hidden md:gap-24">
      {children}
    </main>
  );
};
