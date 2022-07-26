import clsx from "clsx";

interface Props {
  children: [React.ReactNode, React.ReactNode];
  className?: string;
}

interface LayerProps {
  children: React.ReactNode;
  zIndex: number;
}

export const Stack = ({ children, className }: Props) => {
  return (
    <div className={clsx("grid grid-cols-1", className)}>
      {children.map((child, i) => (
        <Layer key={i} zIndex={i}>
          {child}
        </Layer>
      ))}
      <div className="z-10 col-start-1 row-start-1 h-screen max-h-[1080px] w-full">
        {children[1]}
      </div>
    </div>
  );
};

export const Layer = ({ children, zIndex }: LayerProps) => {
  return (
    <div
      className="col-start-1 row-start-1 h-screen max-h-[1080px] w-full"
      style={{ zIndex }}
    >
      {children}
    </div>
  );
};
