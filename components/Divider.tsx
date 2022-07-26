import clsx from "clsx";

interface Props {
  variant?: "primary" | "secondary";
  className?: string;
}

export const Divider = ({ variant = "primary", className }: Props) => {
  return (
    <hr
      className={clsx(
        "h-px border-none",
        { primary: "w-48 bg-primary", secondary: "bg-gray-300" }[variant],
        className
      )}
    />
  );
};
