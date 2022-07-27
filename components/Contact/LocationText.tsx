import clsx from "clsx";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LOCATION } from "../../app/constants";

interface Props {
  className?: string;
}

export const LocationText = ({ className }: Props) => {
  return (
    <span className={clsx("flex items-center gap-2 font-light", className)}>
      <FaMapMarkerAlt />
      {LOCATION}
    </span>
  );
};
