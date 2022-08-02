import { VALENTINO_GUERRA_URL } from "../app/constants";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 px-4 py-4 text-sm lg:px-8">
      <div className="container mx-auto flex flex-row flex-wrap justify-between gap-2 text-white md:px-2">
        <span>Copyright © 2022</span>
        <a href={VALENTINO_GUERRA_URL} target="__blank">
          <span>por Valentino Guerra</span>
        </a>
      </div>
    </footer>
  );
};
