import { Search as SearchIcon } from "lucide-react";


export default function Searchbar( { id, useid, work } ) {

  const handleSearch = () => {
    work();
    }

  return (
    <>
        <div className="flex flex-row items-center justify-center mt-16 w-full px-4 gap-6 ">
        

        <div className="relative w-full max-w-xl">
            <input
            type="text"
            placeholder="Find your next favorite movie..."
            value={id}
            onChange={(e) => useid(e.target.value)}
            className="w-full px-5 py-3 pl-12 text-lg text-white bg-[#1a1a1a] border border-gray-600 rounded-full 
                        outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 placeholder-gray-400"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
            <div>
        <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold 
                    shadow-lg hover:shadow-red-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
        >
            🔍 Search
        </button>
            </div>
            </div>
            
            
    </>
  );
}
