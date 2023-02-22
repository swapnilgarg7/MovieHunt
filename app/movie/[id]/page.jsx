import Image from 'next/image';
import React from 'react'

async function MoviePage({ params }) {
    const movieId = params.id;

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`)
    const movie = await res.json();

    return (
        <div className='w-full'>
            <div className='flex flex-col md:flex-row p-4 md:pt-8 items-center content-center space-x-4 max-w-7xl mx-auto'>

                <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg"
                    width={500}
                    height={300}
                    placeholder="blur"
                    blurDataURL="/loading.svg"
                    style={{
                        maxWidth: '100%',
                        height: '100%',
                    }}
                >
                </Image>

                <div className='movie-info p-2 content-center space-y-2 '>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-3xl font-bold mb-3'>{movie.title || movie.name}</h1>
                        <p className=''> <span className="font-bold">Runtime:</span> {movie.runtime} minutes</p>
                    </div>

                    <p className='text-xl'> <span className="font-bold">Overview:</span> {movie.overview}</p>
                    <p className='text-xl'> <span className="font-bold">Genres:</span> {movie?.genres?.map((genre) => (
                        <span key={genre.id} > {genre.name}   </span>
                    ))}</p>
                    <p className='text-xl'><span className="font-bold">Release Date:</span> {movie.release_date}</p>
                    <p className='text-xl'><span className="font-bold">Rating:</span> {movie.vote_average} / 10</p>

                </div>
            </div>
        </div>
    )
}

export default MoviePage