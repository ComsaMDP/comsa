import contactBackground from "../../assets/contact_background.png";
import { Background } from "../Background";
import { ContactOptions } from "./ContactOptions";
import { LocationText } from "./LocationText";
import { Divider } from "../Divider";
import { Map } from "./Map";

export const Contact = () => {
  return (
    <section className="flex flex-col">
      <div className="relative h-auto  w-full overflow-visible pt-16 ">
        <Background src={contactBackground} alt="control de plagas" />
        <Content />
      </div>
      <Map className="lg:hidden" />
    </section>
  );
};

const Content = () => {
  return (
    <div
      id="contact"
      className="container relative z-10 mx-auto flex flex-col gap-10 overflow-visible px-4 py-6 text-white md:pt-16 lg:flex-row lg:px-8"
    >
      <ContactOptions />
      <Divider variant="secondary" className="lg:hidden" />
      <LocationText className="self-center text-sm lg:hidden" />
      <Map className="hidden lg:flex" />
    </div>
  );
};
