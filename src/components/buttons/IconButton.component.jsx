import React from 'react';
import styled from 'styled-components';

const IconButtonComponent = ({ children, icon, style, className }) => (
  <Wrapper className={className} type="button" style={style}>
    {icon && <img src={icon} className="icon" alt="icon" />}
    <span>{children}</span>
  </Wrapper>
);

export default IconButtonComponent;

const Wrapper = styled.button`
  span,
  img {
    margin: 0 auto;
    display: block;
  }
  img {
    transition: transform 0.2s ease-in-out;
  }

  span {
    font-size: 0.625rem;
    font-weight: 600;
    color: #78909c;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;
