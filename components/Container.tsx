import React from "react";

interface Props {
  children: React.ReactNode;
  id?: string;
}

export const Container = ({ children, id }: Props) => {
  return (
    <div className="container mx-auto flex flex-col gap-8 px-4 md:px-8" id={id}>
      {children}
    </div>
  );
};
