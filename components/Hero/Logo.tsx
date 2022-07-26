import Image from "next/image";
import logo from "../../assets/logo.svg";

export const Logo = () => {
  return (
    <div className="block w-full px-10 md:w-[300px] md:px-0">
      <Image
        src={logo}
        alt="comsa logo"
        layout="responsive"
        objectFit="contain"
      />
    </div>
  );
};
