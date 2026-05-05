import MovieCard from "../components/MovieCard.jsx"
import "../styles/MovieList.css";
function MovieList({ movies, showDetail }) {

    return (
        <section className="movie-list">
            {movies?.map((movie, index) => (
                <MovieCard key={`${movie.id}-${index}`} movie={movie} showDetail={showDetail}/>
            ))}
        </section>
    )
}

export default MovieList
