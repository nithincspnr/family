import axios from "axios";
import { useQuery } from "react-query";
import { Fragment, useReducer, useState } from "react";
import { addProfileReducer } from "./reducer";

const searchProfiles = async ({ queryKey }) => {
  const [_, query] = queryKey;
  const response = await axios.get(`http://127.0.0.1:4000/search?q=${query}`);
  return response.data;
};

const AddProfile = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [state, dispatch] = useReducer(addProfileReducer, {});
  const { data, error, isLoading, refetch } = useQuery(
    ["searchProfiles", searchQuery],
    searchProfiles,
    {
      enabled: false,
    }
  );

  const onInputChange = (value, field) => {
    dispatch({ type: "update_profile", key: field, value });
  };

  const onSearchProfile = () => {
    const query = state["searchInput"];
    setSearchQuery(query);
    if (query && query?.length > 2) {
      // refetch in setTimeout will pick latest searchQuery value
      setTimeout(() => refetch());
    }
  };

  console.log(data);

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Add Profile</h1>
        </div>
        <form
          action="#"
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => onInputChange(e.target.value, "name")}
            className="w-full  border-gray-200 py-3 px-4 text-sm shadow-sm"
          />
          <input
            type="place"
            placeholder="Place"
            onChange={(e) => onInputChange(e.target.value, "place")}
            className="w-full  border-gray-200 py-3 px-4 text-sm shadow-sm"
          />
          <input
            type="contact"
            placeholder="contact number"
            onChange={(e) => onInputChange(e.target.value, "contact")}
            className="w-full  border-gray-200 py-3 px-4 text-sm shadow-sm"
          />

          {/* Partner */}
          {/* <h3 className="mt-4 text-sm font-bold">Partner</h3>
          <div className="flex"></div> */}
          {/* Children */}
          {/* <h3 className="mt-4 text-sm font-bold">Children</h3>
          <div className="flex"></div> */}
          {/* Parents */}
          {/* <h3 className="mt-4 text-sm font-bold">Parents</h3>
          <div className="flex"></div> */}

          <h3 className="mt-4 text-sm font-bold">
            Search profiles & add relationship
          </h3>
          <div className="flex">
            <input
              type="text"
              id="partner"
              onChange={(e) => onInputChange(e.target.value, "searchInput")}
              className="w-full py-3 px-4 block border-gray-200 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 "
              placeholder="Search profile..."
            />
            <button
              className="ml-2 w-24 px-3 py-1 bg-blue-500 text-white"
              onClick={onSearchProfile}
            >
              Search
            </button>
          </div>
          {data && (
            <Fragment>
              <h4 className="text-sm">Results :</h4>
              <div className="flex">
                {data?.results?.map((item, index) => (
                  <div key={index}>
                    {item?.image_url && (
                      <img src={item?.image_url} width={"60px"} />
                    )}
                    {item?.name} <a href="">Add as child</a>
                  </div>
                ))}
              </div>
              {/* <ul className="list-disc ml-4">
                {data?.results?.map((item, index) => (
                  <li key={index}>
                    <div>
                      <img src={item?.image_url} />
                      {item?.name} <a href="">Add as child</a>
                    </div>
                  </li>
                ))}
              </ul> */}
            </Fragment>
          )}

          <button
            type="submit"
            className="inline-block bg-green-700 px-5 py-3 text-sm font-medium text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProfile;
