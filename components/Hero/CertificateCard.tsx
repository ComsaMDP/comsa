import Image from "next/image";
import React from "react";
import certificate from "../../assets/certificate.png";
import { B } from "../Text";
import { DarkCard } from "./DarkCard";

export const CertificateCard = () => {
  return (
    <DarkCard className="relative items-center self-center">
      <div className="hidden items-center lg:flex">
        <Image src={certificate} alt="certificate" height={24} width={24} />
      </div>
      <div className="absolute left-0 top-0 h-full w-1 self-stretch rounded bg-primary lg:hidden" />
      <span className="flex-1 text-base font-light text-white md:text-xl">
        <span className="hidden lg:inline">
          Empresa <B>habilitada</B> y <B>autorizada</B> por el Ministerio de
          Salud de La Nación, la Provincia de Buenos Aires y por la
          Municipalidad de General Pueyrredon. Se <B>emiten certificados</B> por
          cada trabajo realizado, lo que permite dar cumplimiento a las
          disposiciones legales vigentes en la materia.
        </span>
        <span className="lg:hidden">
          Empresa <B>habilitada</B> y <B>autorizada</B> por el MSAL, la PBA y la
          MGP. <B>Se emiten certificados</B> por trabajo realizado.
        </span>
      </span>
    </DarkCard>
  );
};

/* 
Empresa habilitada y autorizada por el Ministerio de Salud de La Nación, la Provincia de Buenos Aires y por la Municipalidad de General Pueyrredon
*/
