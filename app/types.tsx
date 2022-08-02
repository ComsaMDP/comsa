export interface BaseProps {
  children: React.ReactNode;
  className?: string;
}

export type Service =
  | "desratizacion"
  | "desinsectacion"
  | "desinfeccion"
  | "control-de-murcielagos"
  | "desinfeccion-por-covid-19";

export type FormStatus = "normal" | "sending" | "sent";
