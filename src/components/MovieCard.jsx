import "../styles/MovieCard.css";

function MovieCard({ movie , showDetail}) {
    const mainInfo = [movie?.Year, movie?.Runtime, movie?.Genre, movie?.imdbRating ? `${movie.imdbRating} IMDb` : null].filter(Boolean).join(' · ')

    return (
        <article className="movie-card" onClick={() => showDetail(movie)}>
            <img className="poster" src={movie?.Poster} alt={movie?.Title} />
            <div className="card-body">
                <h3 className="title">{movie?.Title}</h3>
                {mainInfo && <div className="meta">{mainInfo}</div>}
            </div>
        </article>
    )
}

export default MovieCard
