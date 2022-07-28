import { useEffect, useState } from "react";

export const useNav = () => {
  const [aboutUsTop, setAboutUsTop] = useState(0);
  const [serviceTop, setServiceTop] = useState(0);
  const [contactTop, setContactTop] = useState(0);

  useEffect(() => {
    const body = document.body.getBoundingClientRect();

    const getOffset = (id: string) => {
      const element = document.querySelector("#" + id);
      const elementPos = element?.getBoundingClientRect();
      console.log({ y: elementPos?.y });
      return elementPos?.y ?? 0 - body.top;
    };

    setAboutUsTop(getOffset("about-us") - 100);
    setServiceTop(getOffset("services") - 100);
    setContactTop(getOffset("contact"));
  }, []);

  const scrollTo = (offset: number) => {
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  const goToAboutUs = () => scrollTo(aboutUsTop);

  const goToServices = () => scrollTo(serviceTop);

  const goToContact = () => scrollTo(contactTop);

  return { goToAboutUs, goToServices, goToContact };
};
