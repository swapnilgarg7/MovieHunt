import NavBarItem from "./NavBarItem"

function NavBar() {
    return (
        <div className="flex justify-center lg:text-lg p-4 bg-slate-300 dark:bg-gray-600">
            <NavBarItem title="Trending" param="fetchTrending" />
            <NavBarItem title="Top Rated" param="fetchTopRated" />
        </div>
    )
}

export default NavBar