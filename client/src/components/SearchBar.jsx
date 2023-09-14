import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/Action";

export const SearchBar = () => {

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    query: "",
});

const handleChange = (event) => {
  setForm({
      ...form,
      [event.target.name]: event.target.value,
  });
};

  const handleSubmit = (event) => {
    event.preventDefault();
    
      const response = dispatch(getAllUsers(form.query))
      return response;
    }
  
  

  return (
    <form className="w-[350px] mb-4 mt-4" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input
          type="search"
          name="query"
          className="w-full h-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500"
          placeholder="Search people"
          required
          value={form.query}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};
