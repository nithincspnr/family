function Search() {
  return (
    <div className="mx-4 flex">
      <input
        className="border-2 border-black rounded-none px-3 py-3 focus:outline-none text-sm w-full"
        type="text"
        placeholder="Search for Name, Place"
      />
      <button
        className="ml-2 w-24 px-5 bg-black text-white"
        style={{ height: 48 }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
