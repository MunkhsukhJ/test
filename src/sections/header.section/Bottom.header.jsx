import React from 'react';
import styled from 'styled-components';

const BottomHeader = () => (
  <div className="container">
    <Wrapper>
      <button type="button">
        <img src="https://ebazaar.mn/icon/category2.svg" alt="cat" />
      </button>
      <a href="/companies">Нийлүүлэгчид</a>
      <a href="/">Бүх бүтээгдэхүүн</a>
    </Wrapper>
  </div>
);

export default BottomHeader;

const Wrapper = styled.div`
  margin-bottom: 16px;

  button,
  a {
    margin-right: 2rem;
  }
  a {
    font-size: 1rem;
    font-weight: 600;
    color: #546e7a;
    text-decoration: none;
  }
`;
