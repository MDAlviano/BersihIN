import Image from "next/image";
import exampleTrashImg from "../../../../../public/images/sampah_example.png";

export default function Page() {

    const data = ["100g Sampah Plastik", "50", "Sampah plastik hasil dari mungut tong sampah satu kompleks.", "sigmavin"]

    return(
        <div className="my-16 mx-20 lg:mx-28 flex flex-col lg:flex-row gap-10">
            <Image src={exampleTrashImg} alt="example image" className="w-[400px] h-[250px] lg:w-[620px] lg:h-[400px] border-2 border-color1 rounded-lg"/>
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