export interface Props {
  menu: {
    text: string;
    link?: string;
    submenus: { text?: string; link?: string }[];
  }[];
}

export default function Header({ menu = [] }: Props) {
  return (
    <header class="h-full py-[1.125rem] bg-black">
      <nav class="flex justify-between items-center px-14 max-w-screen-2xl m-auto">
        <a href="/" class="flex justify-center items-center gap-4 text-primary">
          <img
            src="https://www.starlink.com/assets/images/logo_white.png"
            alt="Startlink Logo"
            width="212px"
            height="101px"
          />
        </a>

        <div class="text-white gap-10 hidden md:flex text-uppercase font-extrabold">
          <ul class="flex items-center gap-8 font-medium">
            {menu.map((menu) => {
              return (
                <>
                  <li>
                    <a class="" href={menu.link}>{menu.text}</a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
