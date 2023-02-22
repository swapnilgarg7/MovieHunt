import React from 'react'
import Card from './Card'

function Results({ results }) {
    console.log(results);
    //remove element where movie id = 100088
    results = results.filter(function (el) {
        return el.id != 100088;
    });
    return (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto py-6 ">
            {results.map((result) => (
                <Card key={result.id} result={result} />
            ))}

        </div>
    )
}

export default Results