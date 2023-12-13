import Header from "./Header";
import Results from "./Results";
import SearchBox from "./Search";
import Loader from "../loader";

function Search() {
  return (
    <div>
      <Header />
      <SearchBox />
      <Results />
      <Loader isProfileItem />
    </div>
  );
}

export default Search;
