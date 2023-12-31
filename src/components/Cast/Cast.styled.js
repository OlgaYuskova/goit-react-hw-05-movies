import styled from 'styled-components';

export const CastList = styled('ul')`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CastItem = styled('li')`
  height: 400px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 20px;

  & img {
    height: 200px;
    width: auto;
  }
`;
