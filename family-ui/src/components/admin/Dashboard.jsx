const Dashboard = () => {
  return (
    <div>
      <input
        // ref={inputRef}
        id="profile"
        type="text"
        className="px-3 py-2 focus:outline-none mt-4"
        placeholder="Search profiles"
      />
      <a
        className="inline-block rounded border ml-2 border-indigo-600 bg-indigo-600 px-10 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        href="#"
      >
        Search
      </a>
    </div>
  );
};

export default Dashboard;
