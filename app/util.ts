import axios from "axios";
import { WHATSAPP_API_URL, WHATSAPP_API_KEY } from "./constants";

export const sendWhatsAppMessage = async (
  phone: string | number,
  message: string
) => {
  const url = `${WHATSAPP_API_URL}?phone=${phone}&text=${message}&apikey=${WHATSAPP_API_KEY}`;

  console.log({ url });

  const res = await axios.get(url);

  return res.data;
};
