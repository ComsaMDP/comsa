import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import clsx from "clsx";
import { MAP_LAT, MAP_LNG } from "../../app/constants";
import { LocationText } from "./LocationText";

export const Map = ({ className }: { className?: string }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  return (
    <div className={clsx("flex flex-1 flex-col items-center gap-2", className)}>
      <LocationText className="hidden lg:flex" />
      {isLoaded ? (
        <GoogleMaps />
      ) : (
        <div className="h-96 w-full rounded-lg md:h-auto md:w-auto md:flex-1 md:self-stretch" />
      )}
    </div>
  );
};

export const GoogleMaps = () => {
  return (
    <GoogleMap
      zoom={14}
      center={{ lat: MAP_LAT, lng: MAP_LNG }}
      mapContainerClassName="lg:rounded-lg h-[512px] w-full lg:h-auto lg:w-auto lg:flex-1 lg:self-stretch"
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
