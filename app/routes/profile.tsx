import type { Route } from "../+types/root";

import { Profile } from "~/components/profile/profile";
import { getProfileDetails } from "~/utils/queries.server";

export const loader = async ({ params }: Route.LoaderArgs) => {
  const userDetails = await getProfileDetails(params.id);
  return userDetails;
};

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: data?.name },
    // { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Profile />;
}
