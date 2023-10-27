import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {  
  Container,
  MovieList,
  Movie,
  SearchContainer,
  Input,
} from './styles';

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const imagePath = 'https://image.tmdb.org/t/p/w500/';
  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (searchQuery) {
          // Se houver uma consulta de pesquisa, busque filmes
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}`);
          console.log(response.data.results)
          setMovies(response.data.results);
        } else {
          // Caso contrário, carregue filmes populares
          const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`);
          setMovies(response.data.results);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    // Chame a função de busca inicial
    fetchMovies();
  }, [searchQuery]);

  return (
    <div>
      <Container>
        <h1>Movies Api</h1>
        <SearchContainer>
          <div className="search-container">
            <Input
              placeholder="Search a movie"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </SearchContainer>

        <MovieList>
          {movies.map(movie => {
            return (
              <Movie key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                </Link>
                <span>{movie.title}</span>
              </Movie>
            );
          })}
        </MovieList>
      </Container>
    </div>
  );
}

export default Home;
