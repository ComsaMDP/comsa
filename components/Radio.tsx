import clsx from "clsx";
import { BaseProps } from "../app/types";

interface Props extends BaseProps {
  selected?: boolean;
  onClick?: () => any;
}

export const Radio = ({ selected, children, className, onClick }: Props) => {
  const baseStyle =
    "px-4 h-10 rounded border-2 flex gap-3 items-center transition cursor-pointer select-none";

  const hover = "hover:bg-gray-200";

  const selectedStyle = "border-primary";

  const unselectedStyle = "border-gray-300 ";

  return (
    <div
      onClick={onClick}
      className={clsx(
        baseStyle,
        hover,
        selected ? selectedStyle : unselectedStyle,
        className
      )}
    >
      {children}
    </div>
  );
};
