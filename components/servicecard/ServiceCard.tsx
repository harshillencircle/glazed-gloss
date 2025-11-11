import Image from "next/image";

export default function ServiceCard({ blok }: any) {
  return (
    <div className="absolute top-[313px] left-[51px] flex justify-center items-center bg-[#FAF9F6] p-2.5 rounded-lg gap-2.5 md:gap-5">
      {blok.image?.filename && (
        <Image
          src={blok.image.filename}
          alt={blok.image.alt || ""}
          width={34}
          height={34}
          className="object-cover rounded w-[57px] h-[57px] max-md:w-[34px] max-md:h-[34px]"
          
        />
      )}
      <div className="flex flex-col justify-center items-start gap-2">
        <h3 className="text-xs md:text-xl font-ivypresto font-normal">{blok.headline}</h3>
        <p className="text-[10px] md:text-xs font-Montserrat">{blok.content?.content?.[0]?.content?.[0]?.text}</p>
      </div>

    </div>
  );
}
