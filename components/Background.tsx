import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
  className?: string;
}

export const Background = ({
  src,
  alt,
  priority = false,
  className,
}: Props) => {
  return (
    <div
      className={clsx("absolute -z-0 h-full w-full overflow-hidden", className)}
    >
      <div className="relative mx-auto h-full w-full max-w-[1920px]">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
          priority={priority}
        />
      </div>
    </div>
  );
};
