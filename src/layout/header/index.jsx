import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import isScrolling from 'react-is-scrolling';
import TopHeader from './Top.header';
import MiddleHeader from './Middle.header';
import BottomHeader from './Bottom.header';

const Header = ({ isScrollingDown, isScrollingUp }) => {
  const [cn, setCn] = useState(null);

  useEffect(() => {
    if (isScrollingDown) setCn('down scrolled');
    if (isScrollingUp) setCn('up scrolled');
  }, [isScrollingDown, isScrollingUp]);

  return (
    <Wrapper>
      <div className={`header ${cn}`}>
        <TopHeader />
        <MiddleHeader />
        <BottomHeader />
      </div>
      <div className="header-ph" />
    </Wrapper>
  );
};

export default isScrolling(Header);

const Wrapper = styled.div`
  .header-ph {
    height: 130px;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #fff;

    .top-header {
      transition: height 0.2s ease-in-out;
    }

    &.down {
      .top-header {
        height: 0;
      }
    }
    &.up {
      .top-header {
        height: 27px;
      }
    }
    &.scrolled {
      box-shadow: 0 10px 20px rgb(0 0 0 / 3%);
    }
  }
`;
