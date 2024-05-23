import { NavLink } from "@remix-run/react";

interface Image {
  svgImg: string | null;
}

interface SidebarElement extends Image {
  title: string;
  href: string;
  activeSvgImg: string | null;
}

function ImageReturner({ svgImg }: Image) {
  if (svgImg)
    return <img src={svgImg} alt="Sidebar Element" className="w-6 h-6 mr-2" />;
}

export default function SidebarElement({
  svgImg,
  title,
  href,
  activeSvgImg,
}: SidebarElement) {
  return (
    <div className="flex items-center px-4 py-2 rounded-lg hover:bg-slate-800">
      <NavLink to={href} className="flex items-center w-full h-full">
        {({ isActive }) => (
          <>
            <ImageReturner svgImg={isActive ? activeSvgImg : svgImg} />
            <span className="font-semibold text-gray-300">{title}</span>
          </>
        )}
      </NavLink>
    </div>
  );
}
