import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-2 flex flex-col md:flex-row gap-2 max-w-3xl mx-auto">
            <div className="flex-1">
                <select className="w-full p-3 rounded-lg border-0 bg-gray-100 text-gray-700 focus:ring-2 focus:ring-indigo-700">
                  <option>All Practice Areas</option>
                  <option>Criminal Defense</option>
                  <option>Family Law</option>
                  <option>Corporate Law</option>
                  <option>Real Estate</option>
                  <option>Intellectual Property</option>
                </select>
            </div>
            <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Location (Town, City, or County)" 
                  className="w-full p-3 rounded-lg border-0 bg-gray-100 text-gray-700 focus:ring-2 focus:ring-indigo-700"
                />
            </div>
            <button className="flex items-center justify-center gap-2 bg-indigo-900 text-white p-3 rounded-lg cursor-pointer hover:bg-indigo-800 transition-colors duration-300">
                <FaSearch className="text-xl" /> Find an Advocate
            </button>
        </div>
    );
};

export default SearchBar;