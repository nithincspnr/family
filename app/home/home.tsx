import { Link } from "react-router";

export function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <Link to={"/search"}>Search</Link>

      <Link to={"/profile"}>Profile</Link>
    </main>
  );
}
