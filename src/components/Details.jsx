import "../styles/Details.css";

function Details({ movie, setDetails }) {
  const mainInfo = [movie?.Year, movie?.Runtime, movie?.Genre, movie?.imdbRating ? `${movie.imdbRating} IMDb` : null].filter(Boolean).join(' · ')

  return (
    <div className="details">
        <button className="back-btn" onClick={() => setDetails(false)}>← Volver</button>
        <header className="details-header">
          <h2 className="title">{movie?.Title}</h2>
          {mainInfo && <div className="details-meta">{mainInfo}</div>}
        </header>

        <div className="details-content">
          <img className="details-poster" src={movie?.Poster} alt={movie?.Title}></img>
          <div className="details-info">
            {movie?.Plot && <p className="plot">{movie.Plot}</p>}
            {movie?.Director && <p className="info-line">Directed by {movie.Director}</p>}
            {movie?.Actors && <p className="info-line">Cast: {movie.Actors}</p>}
            {movie?.Language && <p className="info-line">Language: {movie.Language}</p>}
            {movie?.Country && <p className="info-line">Country: {movie.Country}</p>}
          </div>
        </div>
    </div>
  )
}

export default Details
