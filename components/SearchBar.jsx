"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBar() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    function handleSubmit(e) {
        e.preventDefault();
        if (search === "") return;

        router.push(`/search/${search}`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-between">
            <input type="text" placeholder="Search for a movie..."
                className="w-full h-14 bg-transparent my-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 "
                onChange={
                    (e) => {
                        setSearch(e.target.value);
                    }
                }
                value={search}
            />
            <button disabled={!search} type="submit" className="px-4 py-2 disabled:text-gray-400 rounded-lg text-yellow-600 hover:text-yellow-700 transition duration-200">Search</button>
        </form>
    )
}

export default SearchBar