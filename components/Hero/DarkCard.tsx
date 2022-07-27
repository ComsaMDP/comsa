import clsx from "clsx";
import { BaseProps } from "../../app/types";

export const DarkCard = ({ children, className }: BaseProps) => {
  return (
    <div
      className={clsx(
        "relative flex gap-4 rounded bg-black bg-opacity-30 px-4 py-2 md:absolute md:top-24 md:mx-8",
        className
      )}
    >
      {children}
    </div>
  );
};
