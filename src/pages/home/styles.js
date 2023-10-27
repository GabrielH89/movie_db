import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around; /* Empilhar elementos verticalmente em telas menores */
  align-items: center; /* Centralizar horizontalmente */
  text-align: center;
`;

export const Input = styled.input`
  width: 400px; /* Preencha todo o espaço disponível horizontalmente */
  margin-bottom: 30px; /* Espaçamento entre o campo de entrada e o botão */
  height: 40px;
  font-size: 1.3rem;
  margin-right: 10px;
  border: none;
`;

