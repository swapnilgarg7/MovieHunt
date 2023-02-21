import React from 'react'

function About() {
    return (
        <div className='mx-6 space-y-6'>
            <h1 className='text-2xl font-medium'>
                About
            </h1>
            <p className='text-lg'>
                This is a website that helps movie enthusiasts find a movie to watch.
                It provides a list of movies that are currently trending and top rated.
                This website also provides a search bar that allows users to search for movies by title, director, actor, genre, or release date.
                The data is constantly updated and hence users can always find the latest movies and TV shows, ensuring they have access to the latest and greatest in the world of cinema.
                The goal is to help you find the perfect movie for any occasion!

            </p>
            <p className='text-lg'>
                This website was implemented with Next.js, Tailwind CSS, TMDb API.
                Thank you for visiting this website, I hope you find something to watch!
                If you have any questions or suggestions,
                please contact me on <a className='underline' href="https://www.linkedin.com/in/swapniltech/">LinkedIn</a>.

            </p>
        </div>
    )
}

export default About