import Button from "~/components/Button";
import Error from "~/components/Error";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-3">
      <Error />
      <h2 className="text-3xl font-bold">Упс! Неизвестная страница.</h2>
      <Button title="Вернуться домой" href="/" />
    </div>
  );
}
