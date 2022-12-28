import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  image: LiveImage;
  imageMobile: LiveImage;
  altText: string;
  title: string;
  subTitle: string;
}

export default function Banner(
  { image, imageMobile, altText, subTitle, title }: Props,
) {
  return (
    <div class="relative">
      <picture class="inset-0">
        <source
          media="(max-width: 767px)"
          srcset={imageMobile}
        />
        <source
          media="(min-width: 768px)"
          srcset={image}
        />
        <Image
          class="object-cover w-full h-full inset-0 h-[125vw] md:h-auto"
          sizes="(max-width: 640px) 75vw, 50vw"
          src={image}
          alt={altText}
          width={300}
          height={300}
        />
      </picture>
      <div class="h-full w-full absolute text-primary top-10">
        <div class="flex flex-col justify-center h-full w-full max-w-screen-2xl m-auto px-5 text-white">
          <h1 class="text-3xl lg:text-5xl max-w-md font-bold mt-2 md:mt-8 ">
            {title}
          </h1>
          <p class="text-1xl">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}
