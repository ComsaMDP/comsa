import Image from "next/image";
import logo from "../../assets/logo.svg";

export const Logo = () => {
  return (
    <Image
      src={logo}
      alt="comsa logo"
      width={968 / 2.7}
      height={407 / 2.7}
      layout="fixed"
      objectFit="contain"
      quality={100}
    />
  );
};
