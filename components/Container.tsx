import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto flex flex-col gap-8 px-4 md:px-8">
      {children}
    </div>
  );
};
