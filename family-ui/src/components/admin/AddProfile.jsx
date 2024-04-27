import { useReducer } from "react";
import { addProfileReducer } from "./reducer";

const AddProfile = () => {
  const [state, dispatch] = useReducer(addProfileReducer, {});

  const onInputChange = (value, field) => {
    dispatch({ type: "update_profile", key: field, value });
  };

  console.log(state);

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
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
            className="w-full  border-gray-200 p-4 pe-12 text-sm shadow-sm"
          />
          <input
            type="place"
            placeholder="Place"
            onChange={(e) => onInputChange(e.target.value, "place")}
            className="w-full  border-gray-200 p-4 pe-12 text-sm shadow-sm"
          />

          <input
            type="contact"
            placeholder="contact number"
            onChange={(e) => onInputChange(e.target.value, "contact")}
            className="w-full  border-gray-200 p-4 pe-12 text-sm shadow-sm"
          />
          {/* Partner */}
          <h3 className="mt-4 text-sm font-bold">Partner</h3>
          <div className="flex">
            <input
              type="text"
              id="partner"
              className="w-full py-3 px-4 block border-gray-200 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 "
              placeholder="Search profile..."
            />
            <button className="ml-2 w-24 px-3 py-1 bg-blue-500 text-white">
              Search
            </button>
          </div>
          {/* Children */}
          <h3 className="mt-4 text-sm font-bold">Children</h3>
          <div className="flex">
            <input
              type="text"
              id="partner"
              className="w-full py-3 px-4 block border-gray-200 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 "
              placeholder="Search profile..."
            />
            <button className="ml-2 w-24 px-3 py-1 bg-blue-500 text-white">
              Search
            </button>
          </div>
          {/* Parents */}
          <h3 className="mt-4 text-sm font-bold">Parents</h3>
          <div className="flex">
            <input
              type="text"
              id="partner"
              className="w-full py-3 px-4 block border-gray-200 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 "
              placeholder="Search profile..."
            />
            <button className="ml-2 w-24 px-3 py-1 bg-blue-500 text-white">
              Search
            </button>
          </div>
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
