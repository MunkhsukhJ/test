import React from 'react';
import styled from 'styled-components';

const TopHeader = () => (
  <Wrapper className="top-header">
    <div className="container top-container">
      <div className="left">
        <p>Нийлүүлэгч харилцагчийг холбосон - Хамгийн том захиалгын нэгдсэн систем-д тавтай морил</p>
      </div>
      <div className="right">
        <a href="mailTo:info@ebazaar.mn">info@ebazaar.mn</a>
        <a href="tel:77071907">+976 7707-1907</a>
      </div>
    </div>
  </Wrapper>
);

export default TopHeader;

const Wrapper = styled.div`
  height: 27px;
  background-color: #b0bec5;
  font-size: 0.6rem;
  margin-bottom: 16px;

  .top-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .right a:first-child {
      margin-right: 16px;
    }

    p,
    a {
      color: #fff;
    }

    a {
      cursor: pointer;

      &:hover {
        color: #ddd;
      }
    }
  }
`;
