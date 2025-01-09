import Image from "next/image";
import exampleMapImg from "../../../public/images/example-map.png";
import Link from "next/link";
import { MdMyLocation } from "react-icons/md";

export default function Page() {
  return (
    <>
      <Link href="/map/details">
        <div className="relative w-full h-screen overflow-hidden">
          <Image
            src={exampleMapImg}
            alt="example gmap img"
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <button
        id="fab-map"
        className="fixed bottom-16 right-8 lg:bottom-20 lg:right-12 p-3 rounded-lg bg-color8 border border-color1 shadow-lg hover:bg-opacity-90 transition-all"
      >
        <MdMyLocation color="#000" size={28} />
      </button>
    </>
  );
}
