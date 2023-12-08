import styled from 'styled-components';

const MainNavigation = styled('nav')`
  padding: 15px;
  background-color: #daf7a6;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  & > * {
    border-radius: 15%;
    border: 1px solid #ffffff;
    padding: 15px;
    color: #000000;
    background-color: #9acd32;
  }
`;

export default MainNavigation;
