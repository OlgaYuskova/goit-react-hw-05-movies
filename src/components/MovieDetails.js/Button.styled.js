import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const BackLink = styled(NavLink)`
  margin-left: 20px;
  text-decoration: none;
  text-align: center;
  border: 1px solid #000000;
  padding: 5px;
  color: #000000;
  border-radius: 10px;
`;

export default BackLink;
