export interface Props {
  title: string;
  subTitle: string;
}

export default function SectionTitle({ title, subTitle }: Props) {
  return (
    <div class="w-full max-w-screen-2xl m-auto mt-8 px-6 bg-black">
      <div class="bg-gradient-15 from-blue-dark to-blue-super-light h-14 w-36 rounded-full flex justify-center items-center m-auto">
        <span class="bg-secondary text-white text-2xl font-bold h-[48px] w-[136px] rounded-full flex justify-center items-center">
          {title}
        </span>
      </div>
      <p class="font-medium text-white text-xl md:text-2xl md:text-center">
        {subTitle}
      </p>
    </div>
  );
}
