import { useState } from "react"
import api from "./services/api.js"
import SearchBar from "./components/SearchBar.jsx"
import MovieList from "./components/MovieList.jsx"

function App() {
    const [searchResults, setSearchResults] = useState([])
    const apiKey = "4c7314b4"
    const handleSearch = (event) => {
        event.preventDefault()
        const query = event.target.movieName.value
        api.get(`/?apikey=${apiKey}&s=${query}`)
            .then(response => {
                setSearchResults(response.data.Search)
            })
    }

    return (
        <>
            <SearchBar handleSearch={handleSearch} />
            <MovieList movies={searchResults} />
        </>
    )
}

export default App
