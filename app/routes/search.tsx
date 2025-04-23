import type { Route } from "../+types/root";

import SearchBox from "~/components/search/search";
import SearchResult from "~/components/search/result";
import { searchProfiles } from "~/utils/queries.server";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const searchQuery = formData.get("searchQuery");
  const result = await searchProfiles(searchQuery as string);
  return result;
};
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Search for your family members!" },
    { name: "description", content: "Search for your family members!" },
  ];
}

export default function Search() {
  return (
    <>
      <SearchBox />
      <SearchResult />
    </>
  );
}
