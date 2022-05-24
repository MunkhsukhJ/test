import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import styled from 'styled-components';

const HeroSection = () => (
  <Wrapper>
    <Swiper loop slidesPerView={1}>
      <SwiperSlide>
        <img className="banner" src="https://admin.ebazaar.mn/media/express-delivery.jpg" alt="banner" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="banner" src="https://admin.ebazaar.mn/media/20220513/desktop.jpg" alt="banner" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="banner" src="https://admin.ebazaar.mn/media/20220512/desktop.png" alt="banner" />
      </SwiperSlide>
    </Swiper>
  </Wrapper>
);

export default HeroSection;

const Wrapper = styled.div`
  .banner {
    width: 100%;
  }
`;
// https://admin.ebazaar.mn/media/express-delivery.jpg
// https://admin.ebazaar.mn/media/20220513/desktop.jpg
// https://admin.ebazaar.mn/media/20220512/desktop.png
