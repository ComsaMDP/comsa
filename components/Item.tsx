export const Item = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-4 rounded-lg border border-gray-300 px-3 py-2">
      {children}
    </div>
  );
};
