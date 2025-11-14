import Image from "next/image";

export default function ServiceCard({ blok }: any) {
  return (
    <div className="absolute top-[115px] left-[65px] z-1 md:top-[313px] md:left-[51px] flex justify-center items-center bg-[#FAF9F6] p-2.5 rounded-lg gap-2.5 md:gap-5 shadow-md transition-all duration-500">
      {blok.image?.filename && (
        <Image
          src={blok.image.filename}
          alt={blok.image.alt || ""}
          width={57}
          height={57}
          className="object-cover rounded w-[34px] h-[34px] md:w-[57px] md:h-[57px]"
        />
      )}
      <div className="flex flex-col justify-center items-start gap-1 md:gap-2">
        <h3 className="text-xs md:text-xl font-ivypresto font-normal">
          {blok.headline}
        </h3>
        <p className="text-[10px] md:text-xs font-Montserrat leading-tight">
          {blok.content?.content?.[0]?.content?.[0]?.text}
        </p>
      </div>
    </div>
  );
}
