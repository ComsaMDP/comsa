import clsx from "clsx";

interface Props {
  value: string;
  placeholder: string;
  className?: string;
  onChange: (value: string) => any;
}

export const Input = ({ value, placeholder, onChange, className }: Props) => {
  return (
    <input
      className={clsx(
        "flex-1 rounded border-2 border-gray-300  bg-transparent px-2 py-2",
        className
      )}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      value={value}
    />
  );
};

export const Textarea = ({
  value,
  placeholder,
  onChange,
  className,
}: Props) => {
  return (
    <textarea
      className={clsx(
        "flex-1 resize-none rounded border-2 border-gray-300 bg-transparent px-2 py-2",
        className
      )}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      value={value}
    />
  );
};
