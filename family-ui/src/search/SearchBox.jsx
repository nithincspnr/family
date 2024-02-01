import { useRef } from "react";

function SearchBox({ onSearchSubmit }) {
  const inputRef = useRef();

  const onSubmit = () => {
    if (inputRef.current.value) {
      onSearchSubmit(inputRef.current.value);
    }
  };

  return (
    <div className="mx-4 flex">
      <input
        ref={inputRef}
        type="text"
        className="border-2 border-black rounded-none px-3 py-3 focus:outline-none text-sm w-full"
        placeholder="Search for Name, Place"
      />
      <button
        onClick={onSubmit}
        className="ml-2 w-24 px-5 bg-black text-white"
        style={{ height: 48 }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBox;
