import Image from 'next/image'
import Link from 'next/link'

import { FiThumbsUp } from 'react-icons/fi'


function Card({ result }) {
    return (
        <div className="group cursor-pointer rounded-lg border border-slate-600 m-2 p-3 shadow-md sm:hover:shadow-slate-800 transition-shadow duration:200">

            <Link href={`/movie/${result.id}`}>
                <div className="title p-1 text-xl font-semibold line-clamp-1">
                    <p>{result.title || result.name}</p>
                </div>
                <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                    alt={result.title}
                    className="rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
                    width={500}
                    height={300}
                    placeholder="blur"
                    blurDataURL="/loading.svg"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                >
                </Image>
                <div className="description p-2">
                    <p className="line-clamp-2 mb-4 text-md">{result.overview}</p>
                    <p className='flex justify-between'>{result.release_date || result.first_air_date}

                        <p className='flex items-center'>
                            < FiThumbsUp className='mr-1' />
                            {result.vote_count}
                        </p>
                    </p>

                </div>

            </Link>


        </div>
    )
}

export default Card