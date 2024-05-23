import { Link } from "@remix-run/react";

type Button = {
  title: string;
  href: string;
};

export default function Button({ title, href }: Button) {
  return (
    <Link to={href}>
      <button
        type="button"
        className="text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        {title}
      </button>
    </Link>
  );
}
