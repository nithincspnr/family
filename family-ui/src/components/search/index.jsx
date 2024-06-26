import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

import Header from "./Header";
import ProfileResult from "./ProfileResult";
import SearchBox from "./SearchBox";

const searchProfiles = async ({ queryKey }) => {
  const [_, query] = queryKey;
  const response = await axios.get(`http://127.0.0.1:4000/search?q=${query}`);
  return response.data;
};

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data = { results: [] },
    error,
    isLoading,
    refetch,
  } = useQuery(["searchProfiles", searchQuery], searchProfiles, {
    enabled: false,
  });

  const onSearchSubmit = (query) => {
    setSearchQuery(query);
    if (query && query?.length > 2) {
      // refetch in setTimeout will pick latest searchQuery value
      setTimeout(() => refetch());
    }
  };

  return (
    <div>
      <Header />
      <SearchBox onSearchSubmit={onSearchSubmit} />
      <ProfileResult
        error={error}
        isLoading={isLoading}
        profiles={data.results}
      />
    </div>
  );
}

export default Search;
