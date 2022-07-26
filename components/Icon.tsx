import Image, { StaticImageData } from "next/image";

interface Props {
  alt: string;
  src: StaticImageData;
}

export const Icon = ({ src, alt }: Props) => {
  return <Image src={src} alt={alt} height={24} width={24} />;
};
