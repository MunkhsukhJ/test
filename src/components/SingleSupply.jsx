import React from 'react';
import styled from 'styled-components';

const SingleSupply = () => (
  <Wrapper>
    <img src="https://media.ebazaar.link/logo/supplier/mcs-coca-cola.jpg" alt="cola" />
    <span>
      <span>М-Си-Эс Кока-Кола</span>
      <span>Хүнс, ус ундаа</span>
    </span>
  </Wrapper>
);

export default SingleSupply;

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  text-align: unset;
  box-shadow: 0 20px 45px rgb(144 164 174 / 5%);
  border-radius: 18px;
  border: 1px solid #eee;
  height: 102px;
  background-color: #fff;
  padding: 8px 16px;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:hover {
    border-color: #ffa400;
  }

  img {
    margin-right: 8px;
    border-radius: 50%;
    height: 78px;
    width: 78px;
  }

  & > span {
    span {
      display: block;
    }
    span:first-child {
      font-size: 1rem;
      font-weight: 700;
      color: #37474f;
      margin-bottom: 0.5rem;
    }
    span:last-child {
      color: #78909c;
      font-size: 0.875rem;
    }
  }
`;
