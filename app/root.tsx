import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";

import stylesheet from "./tailwind.css?url";
import { LinksFunction } from "@remix-run/node";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

// @TODO: ADD MOBILE BOTTOM NAVIGATION BAR FOR NON-PC SCREENS

export function Layout({ children }: { children: React.ReactNode }) {
  const matches = useMatches();
  const is404 = matches.some((match) => match.id === "routes/$");
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-zinc-900 text-gray-300">
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-1 p-2">
            {!is404 && <Sidebar />}
            <div className="flex-1 pl-10 p-4">{children}</div>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
