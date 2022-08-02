import { Button } from "../Button";
import { Divider } from "../Divider";
import { Icon } from "../Icon";
import { Paragraph, Subtitle, Title } from "../Text";

import whatsapp from "../../assets/whatsapp.svg";
import { FiInstagram, FiMail } from "react-icons/fi";
import { FaFacebook, FaPhone } from "react-icons/fa";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MAIL_URL,
  PHONE_URL,
  WHATSAPP_URL,
} from "../../app/constants";
import { ContactForm } from "./ContactForm";

export const ContactOptions = () => {
  return (
    <div className="min-w-md flex flex-1 flex-col gap-6 pt-8">
      <Title>Contacto</Title>
      <Divider />
      <Subtitle>¡Solicite su presupuesto sin cargo!</Subtitle>
      <Paragraph>Lunes a Viernes de 08:00 a 17:00hs</Paragraph>
      <div className="flex flex-wrap gap-4">
        <a href={WHATSAPP_URL} target="__blank">
          <Button>
            <Icon src={whatsapp} alt="whatsapp" />
            <span className="hidden lg:inline">WhatsApp</span>
          </Button>
        </a>
        <a href={INSTAGRAM_URL} target="__blank">
          <Button>
            <FiInstagram size={22} />
            <span className="hidden lg:inline">Instagram</span>
          </Button>
        </a>
        <a href={FACEBOOK_URL} target="__blank">
          <Button>
            <FaFacebook size={22} />
            <span className="hidden lg:inline">Facebook</span>
          </Button>
        </a>
        <a href={PHONE_URL} target="__blank">
          <Button>
            <FaPhone />
            <span>(0223) 477 3452</span>
          </Button>
        </a>
        <a href={MAIL_URL} target="__blank">
          <Button>
            <FiMail />
            <span>comsaarrigo@gmail.com</span>
          </Button>
        </a>
      </div>
      <ContactForm />
    </div>
  );
};
