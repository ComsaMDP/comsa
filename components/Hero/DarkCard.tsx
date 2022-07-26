export const DarkCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex items-center gap-4 self-center rounded bg-black bg-opacity-30 px-4 py-2 md:absolute md:top-24 md:mx-8">
      {children}
    </div>
  );
};
