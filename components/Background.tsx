import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  alt: string;
}

export const Background = ({ src, alt }: Props) => {
  return (
    <div className="absolute -z-0 h-full w-full overflow-hidden">
      <div className="relative mx-auto h-full w-full max-w-[1920px]">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
};
