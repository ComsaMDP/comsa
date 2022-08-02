import React from "react";

interface Props {
  children: React.ReactNode;
  id?: string;
}

export const SectionContainer = ({ children, id }: Props) => {
  return (
    <section
      className="container mx-auto flex flex-col gap-8 px-4 md:px-8"
      id={id}
    >
      {children}
    </section>
  );
};
