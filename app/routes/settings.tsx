import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Settings" },
    { name: "description", content: "Search for your family members!" },
  ];
}

export default function Settings() {
  return <>"Settings"</>;
}
