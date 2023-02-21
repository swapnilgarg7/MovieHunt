import React from 'react'

function Results({ results }) {
    return (
        <div className="">
            {results.map((result) => (
                <div key={result.id} >
                    <h1>{result.title || result.name}</h1>
                    <img className="h-40"
                        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} alt={result.title || result.name} />
                </div>
            ))}
        </div>
    )
}

export default Results