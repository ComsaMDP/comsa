import clsx from "clsx";
import { BaseProps } from "../app/types";

interface Props extends BaseProps {
  variant?: "primary" | "light" | "dark";
  disabled?: boolean;
  onClick?: () => any;
}

export const Button = ({
  children,
  className,
  variant = "light",
  disabled = false,
  onClick,
}: Props) => {
  const base =
    "px-4 py-1 rounded-full border shadow-sm font-medium transition duration-300 text-white active:brightness-95 text-base flex items-center gap-3 font-base h-10 active:scale-95";
  const primary =
    "border-primary bg-primary hover:bg-gray-100 hover:border-gray-100 hover:text-primary";
  const light = "border-gray-100 hover:bg-gray-100 hover:text-slate-900";
  const dark =
    "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-gray-100";

  const styles = clsx(
    base,
    disabled && "opacity-20",
    { primary, light, dark }[variant],
    className
  );

  return (
    <button
      onClick={onClick}
      className={styles}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};
