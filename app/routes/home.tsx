import type { Route } from "../+types/root";
import { Home } from "../components/home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Welcome() {
  return <Home />;
}
