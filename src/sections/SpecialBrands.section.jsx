import React from 'react';
import styled from 'styled-components';
import SectionContainerComponent from '../components/container/SectionContainer.component';

const SpecialBrandsSection = ({ images, title }) => (
  <SectionContainerComponent title={title || '"Онцлох брэндүүд"'}>
    <Wrapper>
      {images.map((img, idx) => (
        <a href="/" key={idx}>
          <img src={img} alt="nesquik" />
        </a>
      ))}
    </Wrapper>
  </SectionContainerComponent>
);

export default SpecialBrandsSection;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 16px;

  a,
  img {
    width: 100%;
    border-radius: 8px;
  }
`;

SpecialBrandsSection.defaultProps = {
  images: [
    'https://admin.ebazaar.mn/media/20220509/nesquik.jpg',
    'https://admin.ebazaar.mn/media/20220509/gelato.jpg',
    'https://admin.ebazaar.mn/media/20220509/owolovo.jpg',
  ],
};
