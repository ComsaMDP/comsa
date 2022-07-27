import contactBackground from "../../assets/contact_background.png";
import { Background } from "../Background";
import { ContactOptions } from "./ContactOptions";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { LOCATION, MAP_LAT, MAP_LNG } from "../../app/constants";
import { FaMapMarkerAlt } from "react-icons/fa";
import clsx from "clsx";
import { LocationText } from "./LocationText";
import { Divider } from "../Divider";

export const Contact = () => {
  return (
    <div className="flex flex-col">
      <div className="relative h-auto max-h-[1080px] w-full overflow-visible pt-16 md:h-screen">
        <Background src={contactBackground} alt="control de plagas" />
        <Content />
      </div>
      <StyledMap className="md:hidden" />
    </div>
  );
};

const Content = () => {
  return (
    <div className="container relative z-10 mx-auto flex flex-col gap-10 overflow-visible px-4 py-6 text-white md:flex-row md:pt-16 lg:px-8">
      <ContactOptions />
      <Divider variant="secondary" className="md:hidden" />
      <LocationText className="text-sm md:hidden" />
      <StyledMap className="hidden md:flex" />
    </div>
  );
};

const StyledMap = ({ className }: { className?: string }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  return (
    <div className={clsx("flex flex-1 flex-col items-center gap-2", className)}>
      <LocationText className="hidden md:flex" />
      {isLoaded ? (
        <Map />
      ) : (
        <div className="h-96 w-full rounded-lg md:h-auto md:w-auto md:flex-1 md:self-stretch" />
      )}
    </div>
  );
};

const Map = () => {
  return (
    <GoogleMap
      zoom={14}
      center={{ lat: MAP_LAT, lng: MAP_LNG }}
      mapContainerClassName="md:rounded-lg h-[512px] w-full md:h-auto md:w-auto md:flex-1 md:self-stretch"
      options={{
        disableDefaultUI: true,
        styles: [
          {
            featureType: "poi.business",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
        ],
      }}
    >
      <MarkerF
        position={{ lat: MAP_LAT, lng: MAP_LNG }}
        label={{
          text: "COMSA",
          fontSize: "20px",
          className: "mt-20 text-slate-700",
          fontFamily: "Readex Pro",
          fontWeight: "700",
        }}
      />
    </GoogleMap>
  );
};
