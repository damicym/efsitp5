import MovieCard from "../components/MovieCard.jsx"
function MovieList({ movies, redirectToDetails }) {

    return (
        <section>
            {movies?.map((movie, index) => (
                <MovieCard key={`${movie.id}-${index}`} movie={movie} redirectToDetails={redirectToDetails}/>
            ))}
        </section>
    )
}

export default MovieList
