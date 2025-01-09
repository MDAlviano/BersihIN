import Image from "next/image";
import { IoAdd } from "react-icons/io5";
import exampleTrashImg from "../../../../public/images/sampah_example.png";
import Link from "next/link";

export default function Page() {
  const indeks = "37.51";
  const totalLaporan = "10";

  const data = [
    ["100g Sampah Plastik", "Inspektur Alviano Sigmatus", "19 jam"],
    ["1,5kg Botol Bekas", "HikaruYo", "2 hari"],
    ["500g Sterofoam Bekas Hajatan", "Inspektur Alviano Sigmatus", "49 menit"],
  ];

  return (
    <div className="max-w-full flex flex-col lg:flex-row gap-3 lg:gap-5 mx-8 my-14 lg:my-10">
      {/* info wilayah section */}
      <div id="info" className="w-full self-center">
        {/* nama wilayah */}
        <div id="header" className="flex flex-col gap-4 my-3">
          <h1 className="font-semibold text-[38px] text-center">Semarang Tengah</h1>
          <div className="w-full hidden lg:flex justify-center">
            <span className="w-3/5 h-[1px] bg-[#D9D9D9]"></span>
          </div>
        </div>
        <div className="flex flex-row justify-evenly my-10 lg:my-20">
          {/* indeks */}
          <div className="text-center font-semibold text-2xl">
            <h3 className="text-[34px] lg:text-5xl">{indeks}%</h3>
            <h5 className="text-base">Indeks</h5>
          </div>
          {/* laporan */}
          <div className="text-center font-semibold text-2xl">
            <h3 className="text-[34px] lg:text-5xl">{totalLaporan}</h3>
            <h5 className="text-base">Laporan</h5>
          </div>
        </div>
        {/* add laporan button desktop */}
        <button className="w-4/6 hidden lg:flex mx-auto py-3 rounded-md bg-color8 hover:bg-opacity-70 border border-color1">
          <IoAdd size={34} className="mx-auto" />
        </button>
      </div>

      {/* list laporan section */}
      <div id="data-laporan" className="w-full lg:h-screen lg:py-5 lg:px-6 lg:bg-color8 rounded-md lg:shadow-md">
        <div id="header" className="flex flex-col m-2 lg:m-9 gap-2">
          <h3 className="text-lg lg:text-2xl font-semibold">Laporan Terbaru</h3>
          <span className="w-full h-[2px] bg-[#D9D9D9]"></span>
        </div>
          {/* list semua laporan */}
        {data.map((data, index) => (
          <div key={index} className="flex flex-row mx-3 lg:mx-10 my-6">
            <Image src={exampleTrashImg} alt="example trash image" className="w-[200px] h-[110px] rounded-md" />
            <div className="w-full flex flex-col mx-5 my-1">
              <h4 className="h-6 lg:h-8 overflow-hidden font-semibold text-sm lg:text-lg">{data[0]}</h4>
              <span className="w-full h-[1px] bg-[#D9D9D9]"></span>
              <h6 className="text-[9px] lg:text-xs font-semibold my-1">
                {data[1]} - {data[2]} yang lalu
              </h6>
              <Link href="laporan" className="font-semibold mt-6 self-baseline text-sm text-color4">
                Baca Selengkapnya...
              </Link>
            </div>
          </div>
        ))}
        {/* add laporan button mobile */}
        <Link href="details/add" className="fixed lg:hidden bottom-16 right-8 p-3 rounded-md bg-color8 hover:bg-opacity-70 border border-color1">
          <IoAdd size={30} className="mx-auto" />
        </Link>
      </div>
    </div>
  );
}
