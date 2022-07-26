import Image from "next/image";
import heroBackground from "../../assets/hero_background.png";

export const Background = () => {
  return (
    <div className="absolute h-full w-full overflow-hidden">
      <div className="relative mx-auto h-full w-full max-w-[1920px]">
        <Image
          src={heroBackground}
          alt="pest control"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
};
