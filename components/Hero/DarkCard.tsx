import clsx from "clsx";
import { BaseProps } from "../../app/types";

export const DarkCard = ({ children, className }: BaseProps) => {
  return (
    <div
      className={clsx(
        "flex gap-4 rounded bg-black bg-opacity-30 px-4 py-2",
        className
      )}
    >
      {children}
    </div>
  );
};
