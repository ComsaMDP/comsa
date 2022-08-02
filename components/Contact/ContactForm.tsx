import clsx from "clsx";
import { useRef, useState } from "react";
import { WHATSAPP_API_PHONE } from "../../app/constants";
import { FormStatus } from "../../app/types";
import { sendWhatsAppMessage } from "../../app/util";
import { Button } from "../Button";
import { Card } from "../Card";
import { Input, Textarea } from "../Input";
import { Subtitle, Title } from "../Text";
import { FiLoader } from "react-icons/fi";

export const ContactForm = () => {
  const initialData = {
    name: "",
    email: "",
    message: "",
    number: "",
    city: "",
  };
  const [data, setData] = useState(initialData);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("normal");
  const [valid, setValid] = useState(false);

  const setter = (name: "name" | "email" | "message" | "number" | "city") => {
    return {
      name,
      value: data[name],
      onChange: (value: string) => {
        setData({ ...data, [name]: value });
        const validinputs = Boolean(data.name && data.number && data.city);
        setValid(validinputs);
      },
    };
  };

  const sendMessage = async () => {
    if (!formRef?.current) return;

    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);

    // Enviar mensaje
    const message = `Nombre: ${data.name}\n\nEmail: ${data.email}\n\nNúmero: ${data.number}\n\nCiudad: ${data.city}\n\n${data.message}`;
    const res = await sendWhatsAppMessage(
      WHATSAPP_API_PHONE,
      encodeURI(message)
    );
  };

  return (
    <Card className="relative bg-gray-100 text-black">
      <div
        className={clsx(
          "flex flex-col gap-4 transition-opacity",
          status !== "normal" && "opacity-0"
        )}
      >
        <Subtitle>¡Envianos un mensaje directo!</Subtitle>
        <form className="flex flex-col items-stretch gap-4" ref={formRef}>
          <div className="flex flex-wrap gap-4">
            <Input
              {...setter("name")}
              className="flex-1"
              placeholder="Nombre y Apellido *"
            />
            <Input
              {...setter("number")}
              className="flex-1"
              placeholder="Número de teléfono *"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <Input
              {...setter("city")}
              className="flex-1"
              placeholder="Ciudad *"
            />
            <Input
              {...setter("email")}
              className="flex-1"
              placeholder="Correo electrónico"
            />
          </div>
          <Textarea {...setter("message")} placeholder="Mensaje" />
          <Button
            variant="primary"
            className="justify-center md:self-end"
            onClick={sendMessage}
            disabled={!valid}
          >
            Enviar mensaje
          </Button>
        </form>
      </div>
      <div
        className={clsx(
          "absolute inset-0 flex items-center justify-center transition-opacity",
          status === "normal" && "pointer-events-none opacity-0"
        )}
      >
        <FiLoader
          className={clsx(
            "animate-spin text-primary",
            status !== "sending" && "hidden"
          )}
          size={32}
        />
        <div
          className={clsx(
            "flex flex-col items-center justify-center gap-4",
            status !== "sent" && "hidden"
          )}
        >
          <Subtitle className="text-primary">¡Mensaje enviado!</Subtitle>
          <span className="text-black ">Gracias por contactarnos</span>
        </div>
      </div>
    </Card>
  );
};
