import React from 'react';
import styled from 'styled-components';

const SectionContainerComponent = ({ children, title, more, className }) => (
  <Wrapper className={className}>
    <div className="container">
      <div className="title-container">
        <h2>{title}</h2>
        {more && (
          <a href={more}>
            <span>Бүгдийг үзэх</span>
            <img src="https://ebazaar.mn/icon/all.svg" alt="right" />
          </a>
        )}
      </div>
      <div className="section-content">{children}</div>
    </div>
  </Wrapper>
);

export default SectionContainerComponent;

const Wrapper = styled.div`
  background-color: #f6f7f8;

  .title-container {
    padding: 3rem 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: #37474f;
      display: inline-block;
    }
    a {
      background: #fff;
      border: 1px solid #eceff1;
      box-shadow: 0 20px 45px rgb(144 164 174 / 5%);
      display: flex;
      align-items: center;
      padding: 4px 1rem;
      border-radius: 8px;
      transition: all 0.2s ease-in-out;
      & > span {
        margin-right: 4px;
        font-size: 1rem;
        font-weight: 700;
        color: #546e7a;
      }
      &:hover {
        border-color: #ffa400;
      }
    }
  }
`;
