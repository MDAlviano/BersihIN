import Image from "next/image";

interface CommItems {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function CommunityItem({
  id,
  title,
  description,
  image,
}: CommItems) {
  return (
    <>
      <div className="flex w-full max-w-xs lg:max-w-xl mr-6 lg:px-8 snap-center">
        <Image
          src={image}
          alt="image"
          width={200}
          height={200}
          className="p-8 w-40 lg:w-60 self-center bg-color1 rounded-lg"
        />
        <div className="flex flex-col px-2 max-h-[160px] py-2 gap-1">
          <h6 className="text-sm lg:text-lg font-semibold">{id}</h6>
          <h1 className="text-sm lg:text-lg font-semibold">{title}</h1>
          <p className="text-[8px] lg:text-sm self-center my-2">{description}</p>
        </div>
      </div>
    </>
  );
}
