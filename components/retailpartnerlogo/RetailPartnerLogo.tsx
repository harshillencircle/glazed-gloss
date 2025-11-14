import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export default function RetailPartnerLogo({ blok }: any) {

  const width = parseInt(blok.logo_width);
  const height = parseInt(blok.logo_height);

  return (
    <div
      {...storyblokEditable(blok)}
      className="flex items-center justify-center"
    >
      <Image
        src={blok.logo_image.filename}
        alt={blok.logo_image.alt || blok.partner_name || "Partner Logo"}
        width={width}
        height={height}
        className="object-cover"
      />
    </div>
  );
}

