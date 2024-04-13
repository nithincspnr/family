const AddProfile = () => {
  return (
    <div className="container">
      <h3>Add Profile</h3>
      <label htmlFor="input-label" className="block text-sm font-medium mb-2">
        Name
      </label>
      <input
        type="text"
        id="input-label"
        className="py-3 px-4 block border-gray-200 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 "
        placeholder="Name"
      />

      <label htmlFor="input-label" className="block text-sm font-medium mb-2">
        Place
      </label>
      <input
        type="text"
        id="input-label"
        className="py-3 px-4 block border-gray-200 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 "
        placeholder="Place"
      />

      <label htmlFor="input-label" className="block text-sm font-medium mb-2">
        Contact number
      </label>
      <input
        type="text"
        id="input-label"
        className="py-3 px-4 block border-gray-200 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 "
        placeholder="Contact number"
      />
    </div>
  );
};

export default AddProfile;
