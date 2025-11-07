import Image from "next/image";

export default function ServiceCard({ blok }: any) {
  return (
    <div className="absolute top-[313px] left-[51px] flex justify-center items-center w-auto h-[77px] bg-[#FAF9F6] p-2.5 border rounded-lg gap-5">
      {blok.image?.filename && (
        <Image
          src={blok.image.filename}
          alt={blok.image.alt || ""}
          width={57}
          height={57}
          className="object-cover"
        />
      )}
      <div className="flex flex-col justify-center items-start">
        <h3 className="text-xl font-semibold">{blok.headline}</h3>
        <p>{blok.content?.content?.[0]?.content?.[0]?.text}</p>
      </div>

    </div>
  );
}
