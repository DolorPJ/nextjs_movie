import axios from "axios";
import Hero from "../component/Hero";
import PopularMovies from "../component/PopularMovies";
import { server } from "../config";


 function index({movies}) {
  console.log(movies)
  return (
    <>
      <div>
        <Hero />
        <PopularMovies movies={movies.results}/>
      </div>
    </>
  );
}


export async function getStaticProps(){
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)

  const movies = res.data;

  return{
    props: {movies}
  }
}

export default index

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1