import Link from "next/link";
import { Button } from "../components/Button";
import { Title } from "../components/Text";

export default function FourOhFour() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8">
      <Title className="text-primary">Página no encontrada...</Title>
      <Link href="/">
        <Button variant="dark">Volver</Button>
      </Link>
    </div>
  );
}
