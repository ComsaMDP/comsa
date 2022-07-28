import clsx from "clsx";
import { useState } from "react";
import { BaseProps } from "../../app/types";

interface Props extends BaseProps {
  onClick?: () => any;
}

export const NavLink = ({ children, className, onClick }: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      className={clsx("relative cursor-pointer", className)}
      onClick={onClick}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      <div
        className={clsx(
          "absolute top-full h-0.5 transition-all duration-500",
          hover ? "w-full bg-primary" : "w-0 bg-transparent"
        )}
      />
    </a>
  );
};
