import type { MetaFunction } from "@remix-run/node";
import Button from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Vimai | Главная" },
    {
      name: "description",
      content: "Платформа для просмотра аниме - Vimai.",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl font-bold">Vimai</h2>
      <p className="font-semibold">Начните просмотр аниме уже сейчас.</p>
      <Button title="Начать" href="/watch" />
    </div>
  );
}
