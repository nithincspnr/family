import { useState } from "react";
import { Form, useNavigate, useSubmit } from "react-router";

import back from "~/assets/back.svg";

export default function Search() {
  const submit = useSubmit();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      return;
    }
    submit(
      { searchQuery },
      {
        method: "post",
        action: "/search",
      }
    );
  };

  return (
    <>
      <div className="flex px-4 py-8">
        <img
          width={20}
          src={back}
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <h1 className="text-2xl m-auto">Search</h1>
      </div>
      <Form method="post" onSubmit={onSubmit}>
        <div className="m-4 flex">
          <input
            name="searchQuery"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className="border-2 border-black rounded-none px-3 py-3 focus:outline-none text-sm w-full"
            placeholder="Search for Name, Place"
          />
          <button
            type="submit"
            className="ml-2 w-24 px-5 bg-black text-white rounded-xs cursor-pointer"
            style={{ height: 48 }}
          >
            Search
          </button>
        </div>
      </Form>
    </>
  );
}
