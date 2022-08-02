import { useEffect, useState } from "react";
import { Service } from "../app/types";
import { useServices } from "./useServices";

export const useNav = () => {
  const { setServiceSelected } = useServices();
  const [aboutUsTop, setAboutUsTop] = useState(0);
  const [servicesTop, setServicesTop] = useState(0);
  const [servicesDetailsTop, setServicesDetailsTop] = useState(0);
  const [contactTop, setContactTop] = useState(0);

  useEffect(() => {
    const body = document.body.getBoundingClientRect();

    const getOffset = (id: string) => {
      const element = document.querySelector("#" + id);
      const elementPos = element?.getBoundingClientRect();
      return elementPos?.y ?? 0 - body.top;
    };

    setAboutUsTop(getOffset("about-us") - 100);
    setServicesTop(getOffset("services") - 100);
    setServicesDetailsTop(getOffset("services-details") - 200);
    setContactTop(getOffset("contact"));
  }, []);

  const scrollTo = (offset: number) => {
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  const goToAboutUs = () => scrollTo(aboutUsTop);

  const goToServices = () => scrollTo(servicesTop);

  const goToServicesDetails = (service?: Service) => {
    scrollTo(servicesDetailsTop);
    if (service) setServiceSelected(service);
  };

  const goToContact = () => scrollTo(contactTop);

  return { goToAboutUs, goToServices, goToServicesDetails, goToContact };
};
