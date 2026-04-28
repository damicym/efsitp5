function MovieCard({ movie }) {

  return (
    <>
      <h2>{movie?.Title}</h2>
      <img src={movie?.Poster} alt={movie?.Title}></img>
      <h3>Tipo: {movie?.Type}</h3>
      <h3>{movie?.Year}</h3>

      
    </>
  )
}

export default MovieCard
