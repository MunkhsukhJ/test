import { createGlobalStyle } from 'styled-components';

import 'swiper/css';
import 'swiper/css/autoplay';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: 13px;
  }
  body {
      .container, .container-fluid {
        padding-left: 8px;
        padding-right: 8px;
        margin-left: auto;
        margin-right: auto;
        
        .row:not(.no-gutters) {
          margin-left: -8px;
          margin-right: -8px;
          & > [class^="col-"],
          & > [class*=" col-"] {
            padding-left: 8px;
            padding-right: 8px;
          }
        }
      }
      @media (min-width: 992px) {
        .container {
          max-width: 100%;
        }
      }
      @media (min-width: 1200px) {
        .container {
          max-width: 1280px;
        }
        .col-lg-1-5 {
          flex: 0 0 25%;
          max-width: 25%;
        }
        .col-xl-1-7 {
          flex: 0 0 14.28%;
          max-width: 14.28%;
        }
      }
      @media (min-width: 1400px) {
        .col-lg-1-5 {
          flex: 0 0 20%;
          max-width: 20%;
        }
      }
      @media (min-width: 1600px) {
        .col-lg-1-5 {
          flex: 0 0 20%;
          max-width: 20%;
        }
        .col-xxl-1-6 {
          flex: 0 0 16.66%;
          max-width: 16.66%;
        }
      }
      @media (min-width: 1400px) {
        .container {
          max-width: 1360px;
        }
      }
    
  }
  
  p {
    margin: 0;
    padding: 0;
  }
  
  a, button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
  
  button {
    background-color: transparent;
    border: none;
  }

`;

export default GlobalStyle;
