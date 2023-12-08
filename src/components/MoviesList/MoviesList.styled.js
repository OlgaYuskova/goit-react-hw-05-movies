import styled from 'styled-components';

const MovieList = styled('ul')`
  margin-left: 0;
  width: 100%;
  padding: 50px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: center;

  & li {
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 5px;
    display: flex;
    height: 40px;
    width: 300px;
    border: 2px solid #006400;
    border-radius: 20px;
  }

  & a {
    text-decoration: none;
    color: #008080;
    font-weight: bold;
    font-size: 14px;
  }
`;

export default MovieList;
