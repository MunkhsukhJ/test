import React, { useState } from 'react';
import styled from 'styled-components';
import formatMoney from '../utils/formatMoney';
import IconButtonComponent from './buttons/IconButton.component';

const SingleProduct = ({ image, name, price }) => {
  const [qty, setQty] = useState(0);

  return (
    <Wrapper>
      <div className="img-container" style={{ backgroundImage: `url(${image})` }} />
      <p className="name">{name}</p>
      <div className="bottom-container">
        <p className="price">{formatMoney(price)}</p>
        <IconButtonComponent className="btn-cart" icon="https://ebazaar.mn/icon/product/cart.svg" />
      </div>
      <div className="qty-container">
        <button onClick={() => setQty(qty - 1)} type="button">
          -
        </button>
        <p>{qty}</p>
        <button onClick={() => setQty(qty + 1)} type="button">
          +
        </button>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;

const Wrapper = styled.div`
  width: 100%;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  border: 1px solid #eceff1;
  box-shadow: 0 10px 20px rgb(0 0 0 / 3%);
  border-radius: 12px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #ffa400;
    .qty-container {
      visibility: visible;
      opacity: 1;
      bottom: -30px;
      border-color: #ffa400;
    }
    .bottom-container .btn-cart {
      top: 14px;
    }
  }

  .qty-container {
    background-color: #fff;
    left: 0;
    right: 0;
    padding: 0.5rem;
    position: absolute;
    display: flex;
    align-items: center;
    margin: 0 -1px;
    border-right: 1px solid #eceff1;
    border-bottom: 1px solid #eceff1;
    border-left: 1px solid #eceff1;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    bottom: 0;
    z-index: 1;

    p,
    button {
      width: 36px;
      border: 1px solid #ddd;
      font-size: 1.3rem;
    }
    button {
      padding: 0;
      height: 36px;
      margin: 0;
      &:active {
        transform: translateY(4px);
      }
      &:first-of-type {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-of-type {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
    p {
      background-color: #f6f7f8;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right-width: 0;
      border-left-width: 0;
    }
  }
  .bottom-container {
    position: relative;
    .btn-cart {
      position: absolute;
      right: 0;
      top: -12px;
      width: 50px;
      height: 50px;
      z-index: 2;
      transition: all 0.2s ease-in-out;
      img {
        width: 100%;
      }
    }
  }
  .img-container {
    width: 100%;
    background: no-repeat center / cover #ddd;
    &:after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }
  .name {
    line-height: 1.1rem;
    color: #546e7a;
    font-weight: 400;
    font-size: 0.9rem;
    height: 28px;
    overflow: hidden;
  }
  .price {
    font-size: 1.2rem;
    font-weight: 800;
    line-height: 1;
    margin: 0.5rem 0;
  }
`;
