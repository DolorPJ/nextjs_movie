import MovieCard from "./MovieCard"

function PopularMovies({movies}) {
  return (
    <div className="popoularmovie_container">
        {movies.map(movie=>(<MovieCard movie= {movie} key={movie.id}/>))}
    </div>
    
  )
}

export default PopularMovies