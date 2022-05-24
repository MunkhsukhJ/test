import React from 'react';
import styled from 'styled-components';
import IconButtonComponent from '../../components/buttons/IconButton.component';

const MiddleHeader = () => (
  <div className="container">
    <Wrapper>
      <div className="right">
        <a href="/">
          <img src="https://ebazaar.mn/logo/ebazaar.svg" alt="ebazaar" />
        </a>
        <input placeholder="Хайх утгаа энд оруулна уу..." />
      </div>
      <div className="left">
        <IconButtonComponent icon="https://ebazaar.mn/icon/noti.svg">Мэдэгдэл</IconButtonComponent>
        <IconButtonComponent icon="https://ebazaar.mn/icon/prof.svg" style={{ marginRight: 8 }}>
          Нэвтрэх
        </IconButtonComponent>
        <div className="btn-container">
          <button className="btn-container-left" type="button">
            <img className="ss" src="https://media.ebazaar.link/icon2/store.svg" alt="store" />
            <span>Таны үйлчилгээний цэг энд байна</span>
            <img src="https://media.ebazaar.link/icon2/arrow.svg" alt="down" />
          </button>
          <button className="btn-container-right" type="button">
            <img src="https://media.ebazaar.link/icon2/sags.svg" alt="cart" />
            <span>
              <span>0</span>
              <span>Таны сагсанд</span>
            </span>
          </button>
        </div>
      </div>
    </Wrapper>
  </div>
);

export default MiddleHeader;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  .right {
    display: flex;
    align-self: center;
    flex: 0 1 100%;
    margin-right: 20px;

    a {
      height: 50px;
    }
    input {
      align-self: center;
      height: 36px;
      width: 100%;
      border: 1px solid #cfd8dc;
      border-radius: 0.5rem;
      margin: 0 20px;
      padding: 0 8px;
      font-size: 0.75rem;
    }
  }
  .left {
    display: flex;
    .btn-container {
      border: 1px solid #eceff1;
      border-radius: 0.5rem;
      padding: 4px;
      display: flex;

      button {
        display: flex;
        align-items: center;
        text-align: unset;
        span {
          color: #90a4ae;
          font-weight: 600;
          font-size: 0.625rem;
        }
        img {
          transition: all 0.2s ease-in-out;
        }

        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }

      &-left {
        border-right: 1px solid #eceff1;

        & > span {
          margin-right: 4px;
        }

        .ss {
          margin-right: 4px;
        }
      }
      &-right > span {
        span {
          display: block;
          &:first-child {
            color: #37474f;
            font-size: 0.875rem;
            font-weight: 700;
          }
        }
      }
    }
  }
`;
