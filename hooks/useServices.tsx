import React, { createContext, useContext, useState } from "react";
import { Service } from "../app/types";

interface Props {
  children: React.ReactNode;
}

interface Value {
  serviceSelected: Service;
  setServiceSelected: React.Dispatch<React.SetStateAction<Service>>;
}

// Context

const defaultValue: Value = {
  serviceSelected: "desratizacion",
  setServiceSelected: () => {},
};

const servicesContext = createContext<Value>(defaultValue);

export const ServicesProvider = ({ children }: Props) => {
  const initial: Service = "desratizacion";
  const [serviceSelected, setServiceSelected] = useState<Service>(initial);

  return (
    <servicesContext.Provider value={{ serviceSelected, setServiceSelected }}>
      {children}
    </servicesContext.Provider>
  );
};

// Hook

export const useServices = () => {
  return useContext(servicesContext);
};
