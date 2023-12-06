import styled from 'styled-components';

export const ReviewsList = styled('ul')`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const ReviewsItem = styled('li')`
  padding: 20px;
  height: 100%;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 20px;
`;
