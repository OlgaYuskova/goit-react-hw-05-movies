import styled from 'styled-components';

export const MovieDetailsContainer = styled('div')`
  margin: 20px;
  display: flex;

  & img {
    height: 100%;
    width: 300px;
    margin-right: 25px;
  }

  & p {
    width: 400px;
  }
`;
export const MovieDetailsInfo = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const MovieCastAndReviews = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;

  & > * {
    border-radius: 15%;
    border: 1px solid #ffffff;
    padding: 15px;
    color: #000000;
    background-color: #9acd32;
  }
`;
