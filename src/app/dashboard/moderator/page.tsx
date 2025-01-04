import Image from "next/image";
import exampleImg from "../../../../public/images/community.jpg";

export default function Page() {

  return (
    // title
    <div className="w-full flex flex-col justify-center gap-4 lg:gap-10 py-16 lg:py-24 px-11 lg:px-24 bg-color3 text-white">
      <div className="flex flex-col w-full gap-11 lg:gap-24 my-6 lg:my-11">
        <h1 className="text-3xl lg:text-7xl font-semibold">Daftar menjadi moderator!</h1>
        <h6 className="w-full lg:w-4/5 text-[10px] lg:text-lg">
          Jadi moderator mungkin bagi sebagian orang adalah tugas yang berat. Namun ternyata ngga seberat yang kamu pikirin lho. Jadi moderator itu asyik dan menyenangkan. Dengan jadi moderator kamu bisa mendapatkan manfaat, yaitu:
        </h6>
      </div>
      {/* information */}
      <div className="flex flex-col w-full">
        <h4 className="text-sm lg:text-2xl font-semibold">1. Peningkatan Kepemimpinan Komunitas</h4>
        <div className="flex flex-row my-4">
          <Image src={exampleImg} alt="leadership" className="rounded-lg w-[150px] h-[90px] lg:w-[500px] lg:h-[330px]" />
          <p className= "w-full lg:w-3/4 px-3 lg:px-10 text-[7px] lg:text-2xl font-extralight self-center">Sebagai moderator, Anda berperan penting dalam menjaga interaksi yang positif dan konstruktif, sekaligus memimpin komunitas untuk mencapai tujuan bersama</p>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-sm lg:text-2xl font-semibold text-end">2. Akses Informasi Eksklusif</h4>
        <div className="flex flex-row-reverse my-4">
          <Image src={exampleImg} alt="leadership" className="rounded-lg w-[150px] h-[90px] lg:w-[500px] lg:h-[330px]" />
          <p className="w-full lg:w-3/4 px-3 lg:px-10 text-[7px] lg:text-2xl font-extralight self-center">Moderator mendapatkan akses ke data laporan dan perkembangan terbaru di website, memberikan wawasan mendalam tentang masalah kebersihan lingkungan.</p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h4 className="text-sm lg:text-2xl font-semibold">3. Kontribusi Nyata untuk Lingkungan</h4>
        <div className="flex flex-row my-4">
          <Image src={exampleImg} alt="leadership" className="rounded-lg w-[150px] h-[90px] lg:w-[500px] lg:h-[330px]" />
          <p className="w-full lg:w-3/4 px-3 lg:px-10 text-[7px] lg:text-2xl font-extralight self-center">Dengan memvalidasi laporan dan memastikan tindak lanjutnya, moderator secara langsung berkontribusi pada terciptanya lingkungan yang lebih bersih dan sehat.</p>
        </div>
      </div>
      <div className="w-full invisible lg:visible flex justify-center my-0 lg:my-11">
        <span className="w-4/5 h-[1px] bg-[#D9D9D9]"></span>
      </div>
      <div className="w-full flex justify-center px-0 lg:px-36 mb-1 lg:mb-14">
        <h6 className="text-start lg:text-center text-[10px] lg:text-lg">Setelah membaca semua manfaat menjadi moderator, apakah kamu ingin dan yakin untuk menjadi moderator? Jika siap silahkan isi form di bawah.</h6>
      </div>

      {/* form */}
      <div className="flex w-full justify-center">
        <form method="" action="" className="flex flex-col item gap-1 w-full lg:w-3/4 mt-1 lg:mt-4">
        {/* <!-- Email --> */}
        <label className="font-semibold text-sm lg:text-base">Email</label>
        <input type="email" name="email" id="email-form" required placeholder="johndoe@gmail.com" className="focus:text-black p-[6px] lg:p-3 mb-2 lg:mb-6 border-color2 border rounded-md" />

        {/* <!-- Nama Lengkap --> */}
        <label className="font-semibold text-sm lg:text-base">Nama Lengkap</label>
        <input type="text" name="name" id="name-form" required placeholder="John Doe" className="focus:text-black p-[6px] lg:p-3 mb-2 lg:mb-6 border-color2 border rounded-md" />

        {/* <!-- Domisili --> */}
        <label className="font-semibold text-sm lg:text-base">Domisili</label>
        <input type="text" name="domisili" id="domisili-form" required placeholder="Gayamsari" className="focus:text-black p-[6px] lg:p-3 border-color2 border rounded-md" />

        <div className="my-4 lg:my-6 text-[6px] lg:text-sm text-center flex flex-row justify-center gap-1">
          Dengan menjadi moderator, kamu menyetujui
          <span id="tnc-trigger" className="text-color1 hover:cursor-pointer">
             Syarat & Ketentuan
          </span>
          serta
          <span id="ppolicy-trigger" className="text-color1 hover:cursor-pointer">
            Kebijakan Privasi
          </span>
          kami.
        </div>

        {/* <!-- Confirm btn --> */}
        <button type="submit" className=" py-2 lg:p-3 mt-4 lg:mt-11 text-color5 text-sm lg:text-base font-semibold bg-color1 hover:bg-green-500 rounded-xl mb-1 lg:mb-3">
          Konfirmasi
        </button>
      </form>
      </div>
    </div>
  );
}
