import { Button } from "../Button";
import { Divider } from "../Divider";
import { Icon } from "../Icon";
import { Paragraph, Subtitle, Title } from "../Text";

import whatsapp from "../../assets/whatsapp.svg";
import mail from "../../assets/mail.png";
import { FiInstagram, FiMail } from "react-icons/fi";
import { FaFacebook, FaPhone } from "react-icons/fa";
import { Card } from "../Card";
import { useState } from "react";
import { Input, Textarea } from "../Input";

export const ContactOptions = () => {
  const initialData = { name: "", email: "", message: "" };
  const [data, setData] = useState(initialData);

  const setter = (name: "name" | "email" | "message") => {
    return {
      name,
      value: data[name],
      onChange: (value: string) => {
        setData({ ...data, [name]: value });
      },
    };
  };

  return (
    <div className="min-w-md flex flex-1 flex-col gap-6 pt-8">
      <Title>Contacto</Title>
      <Divider />
      <Subtitle>¡Solicite su presupuesto sin cargo!</Subtitle>
      <Paragraph>Lunes a Viernes de 08:00 a 17:00hs</Paragraph>
      <div className="flex flex-wrap gap-4">
        <Button>
          <Icon src={whatsapp} alt="whatsapp" />
          <span className="hidden lg:inline">WhatsApp</span>
        </Button>
        <Button>
          <FiInstagram size={22} />
          <span className="hidden lg:inline">Instagram</span>
        </Button>
        <Button>
          <FaFacebook size={22} />
          <span className="hidden lg:inline">Facebook</span>
        </Button>
        <Button>
          <FaPhone />
          <span>(0223) 477 3452</span>
        </Button>
        <Button>
          <FiMail />
          <span>comsaarrigo@gmail.com</span>
        </Button>
      </div>
      <Card className="flex-col items-stretch bg-gray-100 text-black">
        <Subtitle>¡Envianos un mensaje directo!</Subtitle>
        <div className="flex flex-wrap gap-4">
          <Input
            {...setter("name")}
            className="flex-1"
            placeholder="Nombre y Apellido"
          />
          <Input
            {...setter("email")}
            className="flex-1"
            placeholder="Correo electrónico"
          />
        </div>
        <Textarea {...setter("message")} placeholder="Mensaje" />
        <Button variant="primary" className="justify-center md:self-end">
          Enviar mensaje
        </Button>
      </Card>
    </div>
  );
};
