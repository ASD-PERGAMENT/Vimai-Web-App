import SidebarElement from "./SidebarElement";
import homeOutline from "app/icons/home/home-outline.svg";
import homeSolid from "app/icons/home/home-solid.svg";
import bugOutline from "app/icons/test/bug-outline.svg";
import bugSolid from "app/icons/test/bug-solid.svg";

export default function Sidebar() {
  return (
    <div className="p-2 border-2 border-zinc-800 rounded-2xl h-full w-44">
      <SidebarElement
        svgImg={homeOutline}
        activeSvgImg={homeSolid}
        title="Главная"
        href="/"
      />

      <SidebarElement
        svgImg={bugOutline}
        activeSvgImg={bugSolid}
        title="Тест"
        href="/test"
      />
    </div>
  );
}
