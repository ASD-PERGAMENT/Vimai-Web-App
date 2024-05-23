import { Link, NavLink } from "@remix-run/react";
import vimaiLogo from "../../public/vimai.svg";
export default function Header() {
  return (
    <div className="w-full h-24 flex justify-center">
      <div className="w-full border-b border-zinc-700 flex items-center justify-center p-4 h-full">
        <div id="title">
          <Link to={"/"}>
            <img
              src={vimaiLogo}
              alt="Vimai Header Logo"
              style={{ maxWidth: 150 }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
