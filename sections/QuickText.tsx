export interface Props {
  title: string;
  subTitle: string;
}

export default function QuickText(
  { subTitle, title }: Props,
) {
  return (
    <div class="flex bg-black">
      <div class="h-full w-full text-primary top-10">
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
