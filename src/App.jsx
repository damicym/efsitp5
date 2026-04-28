import { useState } from "react"
import api from "./services/api.js"
import SearchBar from "./components/SearchBar.jsx"
import MovieList from "./components/MovieList.jsx"
import Loading from "./components/Loading.jsx"
import Details from "./components/Details.jsx"


function App() {
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [details, setDetails] = useState(false)
    const [movie, setMovie] = useState(null)
    const apiKey = "4c7314b4"
    const handleSearch = (event) => {
        event.preventDefault()
        const query = event.target.movieName.value
        setLoading(true)
        api.get(`/?apikey=${apiKey}&s=${query}`)
            .then(response => {
                setSearchResults(response.data.Search)
                setLoading(false)
            })
    }

    function redirectToDetails(movie) {
        setDetails(true)
        setMovie(movie)
    }

    return (
        <>
        <SearchBar handleSearch={handleSearch} />
        { !details 
            ? <> 
                {loading
                    ? <Loading />
                    : <MovieList movies={searchResults} redirectToDetails={redirectToDetails} />
                }
            </>
            
            : <Details movie={movie} setDetails={setDetails}/>
        }
        </>
    )
}

export default App
