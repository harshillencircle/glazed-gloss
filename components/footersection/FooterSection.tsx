import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection({ blok }: any) {
  console.log(blok);
  return (
    <section
      {...storyblokEditable(blok)}
      className="flex flex-col bg-[#F2F0EA] px-[100px] py-10 gap-10"
    >
      <div className="flex justify-between">
        <div className="flex flex-col w-[380px] gap-5">
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xl text-[#7A5238] font-ivypresto font-normal uppercase">
              {blok.newsletter_title}
            </h4>

            <h5 className="text-[16px] font-termina font-light">
              {blok.newsletter_description}
            </h5>
          </div>

          <div className="flex flex-col gap-2.5">
            <input
              type="text"
              placeholder={blok.name_label}
              className="px-2.5 py-3 text-[16px] font-termina font-light border-b"
            />

            <div className="flex justify-between items-center gap-3">
              <input
                type="email"
                placeholder={blok.email_label}
                className="w-[250px] px-2.5 py-3 text-[16px] font-termina font-light border-b"
              />

              <Link
                href={blok.button_link}
                className="bg-[#DFF624] px-7 py-2.5 rounded-[10px] text-[16px] text-center font-termina font-normal uppercase"
              >
                {blok.button_text}
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[148px] h-[140px]">
          <Image
            src={blok.logo.filename}
            alt="Footer Logo"
            width={148}
            height={140}
          />
        </div>

        <div className="flex w-[491px] flex-col gap-5">
          <h4 className="text-xl text-[#7A5238] font-ivypresto font-normal uppercase">
            {blok.right_title}
          </h4>

          <div className="grid grid-rows-4 grid-cols-2 gap-x-[55px]">
            {blok.right_links?.map((link: any) => (
              <Link
                key={link._uid}
                href={link.url}
                className="text-[14px] font-termina font-normal uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-5">
          <Image src="./heart.svg" alt="Like" width={24} height={24} />

          <Link
            href={blok.website_link}
            className="text-[16px] font-termina font-light"
          >
            {blok.website_label}
          </Link>

          <h5 className="text-[16px] font-termina font-light">
            {blok.copyright_text}
          </h5>
        </div>

        <div className="flex justify-center items-center gap-5">
            {blok.social_icons?.map((icon: any) => (
              <Link key={icon._uid} href={icon.url}>
                <Image src={icon.icon.filename} alt="Sicial Icons" width={28} height={28} />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
