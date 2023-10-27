import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Container, MovieDetails } from "./styles";
import { Link } from "react-router-dom";

function Detail() {
    const [movies, setMovies] = useState([]);
    const apiKey = '220c28168c0dfc85d5afea4cb653a602';
    const imagePath = 'https://image.tmdb.org/t/p/w500/';
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        .then(response => {
            setMovies(response.data.results);

            const movie = {
                id,
                title: response.data.title,
                sinopse: response.data.overview,
                image: `${imagePath}${response.data.backdrop_path}`,
                releaseDate: response.data.release_date,
                vote: response.data.vote_average,
                popularity: response.data.popularity
            }
            console.log(movie.id);
            setMovies(movie);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
    },[id])
    /*const params = useParams();
    console.log(params);*/
    return (
        <Container>
            <div className="movie">
                <img src={movies.image} alt={movies.sinopse}></img>
                    <div className="details">
                        <h1>{movies.title}</h1>
                        <span>{movies.sinopse}</span>
                        <span className="release-date">Release date: {movies.releaseDate}</span>
                        <Link to="/"><button>Go back</button></Link>
                    </div>
            </div>
            <MovieDetails>   
                <span>Vote average: {movies.vote}</span>
                <span>Popularity: {movies.popularity}</span> 
            </MovieDetails>
        </Container>   
        
        
    )
}

export default Detail