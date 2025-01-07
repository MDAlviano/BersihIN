import Image from "next/image";
import exampleTrashImg from "../../../../../../public/images/example-banjir-kanal.png";

export default function Page() {
  const data = ["100g Sampah Plastik", "50", "Sampah plastik hasil dari mungut tong sampah satu kompleks.", "sigmavin"];

  return (
    <div className="my-16 mx-20 lg:mx-28 flex flex-col-reverse lg:flex-row gap-10">
      <div className="w-fit flex flex-col gap-3">
        <h3 className="lg:hidden text-xl font-semibold">Gambar:</h3>
        <Image src={exampleTrashImg} alt="example image" className="w-[400px] h-[250px] lg:w-[620px] lg:h-[400px] border-2 border-color1 rounded-lg" />
        <button id="confirm-button" className="w-full py-2 mt-5 rounded-lg bg-color1 text-lg text-white font-medium">
          Terima
        </button>
        <button id="reject-button" className="w-full py-2 rounded-lg bg-transparent border border-red-500 text-red-500 text-lg font-medium">
          Tolak
        </button>
      </div>
      <div id="detail-info" className="flex flex-col gap-5 self-center">
        <div className="w-full flex flex-col gap-2 font-semibold">
          <h3 className="text-xl">Nama:</h3>
          <h6 className="text-3xl">{data[0]}</h6>
          <span className="w-full h-[1px] bg-[#dddcdc]"></span>
        </div>
        <div className="w-full flex flex-col gap-2 font-semibold">
          <h3 className="text-xl">Indeks:</h3>
          <h6 className="text-3xl">{data[1]}</h6>
          <span className="w-full h-[1px] bg-[#dddcdc]"></span>
        </div>
        <div className="w-full flex flex-col gap-2 font-semibold">
          <h3 className="text-xl">Deskripsi:</h3>
          <p className="font-medium">{data[2]}</p>
          <span className="w-full h-[1px] bg-[#dddcdc]"></span>
        </div>
        <div className="w-full flex flex-col gap-2 font-semibold">
          <h3 className="text-xl">Pembuat Laporan:</h3>
          <h6 className="text-3xl">@{data[3]}</h6>
          <span className="w-full h-[1px] bg-[#dddcdc]"></span>
        </div>
      </div>
    </div>
  );
}
