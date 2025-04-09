import type { Route } from "./+types/home";
import { Profile } from "../profile/profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Search for your family members!" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Profile />;
}
