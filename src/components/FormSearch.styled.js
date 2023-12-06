import styled from 'styled-components';

const FormSearch = styled('form')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & input {
    padding: 5px;
    border-radius: 5px;
    border: 2px solid #006400;
    height: 30px;
    width: 200px;
    background-color: white;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding-left: 40px;
  }

  & button {
    padding: 10px;
    border-radius: 5px;
    border: 2px solid #006400;
    height: 40px;
    width: 100px;
    background-color: #9acd32;
    font-size: 14px;
    font-weight: bold;
  }
`;

export default FormSearch;
