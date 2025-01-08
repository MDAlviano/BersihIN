export default function Page() {
    return(
        <div className="flex flex-col lg:bg-color8 rounded-2xl lg:border border-color1 my-10 mx-auto w-fit p-8 lg:p-14">
            <h1 className="lg:mx-auto text-4xl font-semibold">Laporan</h1>
            <h4 className="lg:mx-auto text-lg font-medium mt-2">Laporkan sampah-sampah yang ada di sekitarmu!</h4>
            {/* form section */}
            <div className="flex flex-col gap-5 p-7 my-9 lg:mx-5 bg-color5 rounded-md border border-color1">
                <div id="input-image-placeholder" className="flex w-full h-52 lg:h-80 bg-color5 rounded-lg border border-color1">
                    <h6 className="m-auto text-[#8A8A8A]">Upload gambar</h6>
                </div>
                <input id="input-title" type="text" placeholder="Judul" className="py-3 px-7 rounded-lg border border-color1 bg-color5 focus:outline-none focus:border-2"/>
                <input id="input-index" type="text" placeholder="Indeks" className="py-3 px-7 rounded-lg border border-color1 bg-color5 focus:outline-none focus:border-2"/>
                <textarea id="input-description" name="" rows={5} placeholder="Tambahkan deskripsi..." className="py-3 px-7 rounded-lg border border-color1 bg-color5 focus:outline-none focus:border-2"></textarea>
                <p className="text-[#8A8A8A]"><span className="font-semibold">Note:</span> Kamu harus menunggu beberapa saat sebelum di unggah ke publik, karena akan di review terlebih dahulu oleh tim reviewer.</p>
                <button id="btn-submit" className="w-full bg-color1 py-3 text-white font-semibold rounded-xl my-4 lg:my-8">Upload</button>
            </div>
        </div>
    );
}