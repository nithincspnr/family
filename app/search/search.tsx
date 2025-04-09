import { useRef } from "react";
import { useNavigate } from "react-router";

import back from "../assets/back.svg";

const ItemLoader = () => (
  <div className="p-4 max-w-sm w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-slate-400 h-12 w-12"></div>
      <div className="flex-1 py-2">
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-400 rounded col-span-1"></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-400 rounded col-span-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export function Search() {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const onSubmit = () => {
    // if (inputRef.current.value) {
    // onSearchSubmit(inputRef.current.value);
    // }
  };
  return (
    <>
      <div className="flex px-4 py-8">
        <img
          width={20}
          src={back}
          onClick={() => navigate(-1)}
          className="mr-24 cursor-pointer"
        />
        <h1 className="text-2xl">Search</h1>
      </div>
      <div className="m-4 flex">
        <input
          ref={inputRef}
          type="text"
          className="border-2 border-black rounded-none px-3 py-3 focus:outline-none text-sm w-full"
          placeholder="Search for Name, Place"
        />
        <button
          onClick={onSubmit}
          className="ml-2 w-24 px-5 bg-black text-white rounded-xs cursor-pointer"
          style={{ height: 48 }}
        >
          Search
        </button>
      </div>
      <h3 className="text-sm font-semibold mt-8 mb-6 px-4">All Results</h3>
      <ItemLoader />
    </>
  );
}
