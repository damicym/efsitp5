function SearchBar({ handleSearch }) {

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search for a movie..." name="movieName" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar
