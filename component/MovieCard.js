import Image from "next/image"
import Link from "next/link"

function MovieCard({movie}) {
  return (
   <Link href={`/movie/${movie.id}`}>
    <div className="moviecard_container">
      <div className="moviecard_image">
      <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={300} height={400}/>
      </div>
        <div className="moviecard_content">
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
        </div>
    </div>
   </Link>
  )
}

export default MovieCard