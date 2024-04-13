import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <ul className="flex">
        <li className="mr-6">
          <Link
            to={"/admin/add-profile"}
            className="text-blue-500 hover:text-blue-800"
          >
            Add Profile
          </Link>
        </li>
      </ul>

      <input
        // ref={inputRef}
        type="text"
        className="px-2 py-1 focus:outline-none"
        placeholder="Search profiles"
      />
      <button className="ml-2 w-24 px-3 py-1 bg-green-700 text-white">
        Submit
      </button>
    </div>
  );
};

export default Dashboard;
