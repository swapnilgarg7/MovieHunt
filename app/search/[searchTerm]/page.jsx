import Results from '@/components/Results';
import React from 'react'

async function SearchResult({ params }) {
    const searchTerm = params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)

    if (!res.ok) {
        throw new Error("Error fetching data");
    }
    const data = await res.json();
    const results = data.results;
    return (
        <div>
            {results && results.length == 0 && <h1 className='text-3xl text-center pt-6'>No results found</h1>}
            {results && results.length > 0 && <h1 className='text-3xl text-center pt-6'>Results for {searchTerm}</h1>}
            {results && <Results results={results} />}


        </div>
    )
}

export default SearchResult