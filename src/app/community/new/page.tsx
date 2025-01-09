import { PlusSquare } from "@geist-ui/icons";

export default function Page() {
    return(
        <div className="flex flex-col lg:bg-color8 rounded-2xl lg:border border-color1 my-10 mx-auto w-fit p-8 lg:p-14">
            <h1 className="lg:mx-auto text-4xl font-semibold">Bagikan Ceritamu</h1>
            <h4 className="lg:mx-auto text-lg font-medium mt-2">Bagikan pengalamanmu kepada komunitas untuk menginspirasi kepada orang lain.</h4>
            {/* form section */}
            <div className="flex flex-col gap-5 p-7 my-9 lg:mx-5 bg-color5 rounded-md border border-color1">
                <div id="input-image-placeholder" className="flex w-full h-52 lg:h-80 bg-color5 rounded-lg border border-color1">
                    <h6 className="m-auto text-[#8A8A8A]">Upload gambar</h6>
                </div>
                <input id="input-title" type="text" placeholder="Judul" className="py-5 px-8 rounded-lg border border-color1 bg-color5 focus:outline-none focus:border-2"/>
                <textarea id="input-description" name="description" rows={5} placeholder="Bagikan ceritamu disini..." className="py-3 px-7 rounded-lg border border-color1 bg-color5 focus:outline-none focus:border-2"></textarea>
                <div className="flex flex-col gap-4 py-4 px-6 rounded-lg border border-color1">
                    <h5 className="text-[#8A8A8A]">Tambahkan kategori:</h5>
                    <button id="btn-add-category" className="w-full bg-color1 py-3 text-white font-semibold rounded-xl"><PlusSquare className="mx-auto"/></button>
                </div>
                <button id="btn-submit" className="w-full bg-color1 py-3 text-white font-semibold rounded-xl my-4 lg:my-8">Upload</button>
            </div>
        </div>
    );
}