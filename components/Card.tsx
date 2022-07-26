import clsx from "clsx";
import { BaseProps } from "../app/types";

export const Card = ({ children, className }: BaseProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-6 rounded-lg border border-gray-300 px-3 py-4 md:py-6 md:px-6",
        className
      )}
    >
      {children}
    </div>
  );
};
