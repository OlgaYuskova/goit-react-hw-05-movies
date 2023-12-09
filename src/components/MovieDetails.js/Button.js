import React from 'react';
import BackLink from './Button.styled';

const Button = ({ location }) => {
  return <BackLink to={location}>Go Back</BackLink>;
};

export default Button;
