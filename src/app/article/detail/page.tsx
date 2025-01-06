"use client";

import Image from "next/image";
import exampleImg from "../../../../public/images/example-banjir-kanal.png";
import { ThumbsUp, ThumbsDown, MessageCircle } from "@geist-ui/icons";

export default function Page() {
  const triggerBtn = () => {
    alert("cliced!");
  };

  const detailComment = [
    ["sigma", "17 jam", "berharap sungai ini lebih diperhatikan", "100"],
    ["skibidi", "6 hari", "aku suka milo", "80"],
    ["sceeby dee", "2 bulan", "rasa cokelat enak", "60"],
    ["hawk tuah", "2 hari", "thai tea", "40"],
    ["rizzler", "17 menit", "berharap sungai ini lebih diperhatikan", "20"],
  ];

  const totalComment = detailComment.length;

  return (
    <div className="w-full flex flex-col justify-center py-3 lg:py-16 px-6 lg:px-24 gap-5 lg:gap-11 bg-color5">
      {/* article */}
      <div id="article-post" className="flex flex-col-reverse lg:grid lg:grid-cols-2 my-4">
        <div className="lg:hidden w-fit flex flex-row gap-1 px-3 py-1 bg-color1 hover:bg-green-500 rounded-xl text-white text-[10px] cursor-pointer">
          <MessageCircle size={14} />
          <h6 className="self-center">{totalComment}</h6>
        </div>
        <Image src={exampleImg} alt="leadership" className="my-3 lg:my-0 rounded-lg w-full h-fit lg:w-[570px] lg:h-[320px]" />
        {/* content */}
        <div className="flex flex-col gap-1 lg:gap-3 self-center">
          <h4 className="text-lg lg:text-2xl font-bold">Update kondisi terkini sungai Banjir Kanal Barat.</h4>
          <p className="text-sm lg:text-sm font-medium self-center">
            Sungai Banjir Kanal Barat kini sudah terlihat jauh lebih bersih sejak kegiatan pembersihan terakhir kali. Ini menunjukkan betapa kuatnya pengaruh kita sebagai komunitas dalam menjaga kebersihan lingkungan, terlebih dengan adanya
            platform komunitas seperti BersihIN. Mari kita lanjutkan perjuangan kita kedepannya!
          </p>
          <div className="hidden w-fit lg:flex flex-row gap-1 px-3 py-1 bg-color1 hover:bg-green-500 rounded-lg text-white text-[10px] cursor-pointer">
            <MessageCircle size={14} />
            <h6 className="self-center">{totalComment}</h6>
          </div>
        </div>
      </div>

      {/* comment */}
      <div className="w-full py-1 lg:py-7 px-2 lg:px-14 bg-color5 lg:bg-color7 rounded-2xl lg:shadow-md">
        <h4 id="total-comment" className="font-bold text-lg lg:text-xl">
          {totalComment} Komentar
        </h4>
        {/* add comment */}
        <div id="add-comment" className="w-full flex flex-row justify-evenly gap-5 lg:px-3 my-4 lg:my-3">
          <span className="rounded-full w-14 h-14 bg-color4"></span>
          <div className="w-4/5 lg:w-11/12 flex flex-col gap-2 lg:gap-3">
            <input id="message" type="text" className="bg-color5 lg:bg-color7 border-b lg:border-b-2 border-black focus:outline-none" />
            <button onClick={triggerBtn} className="w-fit self-end bg-color1 hover:bg-green-500 rounded-3xl text-[10px] lg:text-xs font-medium text-white py-1 lg:py-2 px-5">
              Kirim
            </button>
          </div>
        </div>
        <span className="bg-[#D9D9D9] h-[1px] my-6 lg:mx-16 block"></span>

        {/* list comment */}
        {detailComment.map((detail, index) => (
          <div key={index} id="comment-card" className="flex flex-row my-3 lg:my-6 lg:mx-14 py-3 px-1 lg:px-8 bg-color5 lg:border border-color6 rounded-2xl">
            <span className="rounded-full w-11 h-11 bg-color4 self-center"></span>
            <div className="mx-4">
              <div id="header" className="flex flex-row gap-2 lg:gap-3">
                <h4 id="username" className="font-semibold text-sm lg:text-base">
                  @{detail[0]}
                </h4>
                <h6 id="uploaded_at" className="text-xs lg:text-sm text-gray-400 self-center">
                  {detail[1]} yang lalu
                </h6>
              </div>
              <p id="message" className="text-xs lg:text-lg">
                {detail[2]}
              </p>
              <div id="action" className="flex flex-row gap-4 my-2 lg:my-3 text-gray-500">
                <div id="like" className="flex flex-row gap-1 text-xs lg:text-sm">
                  <ThumbsUp size={18} className="cursor-pointer" />
                  <p id="totalLike" className="self-center">
                    {detail[3]}
                  </p>
                </div>
                <ThumbsDown size={18} className="cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
