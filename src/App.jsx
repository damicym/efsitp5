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
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [detailsLoading, setDetailsLoading] = useState(false)
    const apiKey = "4c7314b4"
    const handleSearch = (event) => {
        event.preventDefault()
        const query = event.target.movieName.value
        setLoading(true)
        api.get(`/?apikey=${apiKey}&s=${query}`)
            .then(response => {
                setSearchResults(response.data)
                setLoading(false)
                setDetails(false)
            })
    }

    function showDetail(movie) {
        setDetails(true)
        if (movie?.imdbID && selectedMovie?.imdbID && movie.imdbID === selectedMovie.imdbID) return
        setDetailsLoading(true)
        api.get(`/?apikey=${apiKey}&i=${movie.imdbID}`)
        .then(response => {
                setSelectedMovie(response.data)
                setDetailsLoading(false)
            })
    }

    return (
        <div className="site">
        { !details 
            ?   <> 
                    <SearchBar handleSearch={handleSearch} />
                    { loading
                        ? <Loading />
                        : searchResults?.Response === "True" 
                            ? <MovieList movies={searchResults?.Search} showDetail={showDetail} />
                            : searchResults?.Response === "False" 
                                ? <h2>{!searchResults?.Error ?  "Error: No se encontraron resultados" : `Error en la API: ${searchResults.Error}`}</h2>
                                : <div>
                                    <h2>Bienvenido a Movie Search App</h2>
                                    <p>Utiliza la barra de búsqueda para encontrar tus películas favoritas.</p>
                                </div>
                    }
                </>
            : detailsLoading
                ? <Loading />
                : <Details movie={selectedMovie} setDetails={setDetails}/>
        }
        </div>
    )
}

export default App
