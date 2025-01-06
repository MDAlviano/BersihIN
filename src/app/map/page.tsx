import Image from "next/image";
import { MapPin } from "@geist-ui/icons";
import exampleMapImg from "../../../public/images/example-map.png";

export default function Page() {
  return (
    <div className="relative w-full h-screen">
      <div className="relative w-full h-full overflow-hidden">
        <Image src={exampleMapImg} alt="example gmap img" className="w-full h-full object-cover" />
        <button id="fab-map" className="absolute bottom-16 right-8 lg:bottom-20 lg:right-12 p-3 rounded-lg bg-color8 border border-color1 shadow-lg hover:bg-opacity-90 transition-all">
          <MapPin color="#000" size={28} />
        </button>
      </div>
    </div>
  );
}
