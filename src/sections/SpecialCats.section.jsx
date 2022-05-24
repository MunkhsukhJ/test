import React from 'react';
import styled from 'styled-components';
import SectionContainerComponent from '../components/container/SectionContainer.component';
import SingleProduct from '../components/SingleProduct';

const SpecialCatsSection = () => (
  <SectionContainerComponent title="Онцлох ангиллууд">
    <Wrapper>
      {products.map((p, idx) => (
        <SingleProduct image={p.image} name={p.name} price={p.price} key={idx} />
      ))}
    </Wrapper>
  </SectionContainerComponent>
);

export default SpecialCatsSection;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.6rem;
`;
const products = [
  {
    image: 'https://ebazaar.mn/media/product/5166800871784638291846565346202205030347228036700509108966371115796764.png',
    name: 'Owolovo алим бөөрөлзгөнийн нухаш 200гр/40ш',
    price: 4500,
  },
  {
    image: 'https://ebazaar.mn/media/product/5166800871784638291846565346202205030347228036700509108966371115796764.png',
    name: 'Owolovo алим бөөрөлзгөнийн нухаш 200гр/40ш',
    price: 4500,
  },
  {
    image: 'https://ebazaar.mn/media/product/5166800871784638291846565346202205030347228036700509108966371115796764.png',
    name: 'Owolovo алим бөөрөлзгөнийн нухаш 200гр/40ш',
    price: 4500,
  },
  {
    image: 'https://ebazaar.mn/media/product/5166800871784638291846565346202205030347228036700509108966371115796764.png',
    name: 'Owolovo алим бөөрөлзгөнийн нухаш 200гр/40ш',
    price: 4500,
  },
  {
    image: 'https://ebazaar.mn/media/product/5166800871784638291846565346202205030347228036700509108966371115796764.png',
    name: 'Owolovo алим бөөрөлзгөнийн нухаш 200гр/40ш',
    price: 4500,
  },
  {
    image: 'https://ebazaar.mn/media/product/5166800871784638291846565346202205030347228036700509108966371115796764.png',
    name: 'Owolovo алим бөөрөлзгөнийн нухаш 200гр/40ш',
    price: 4500,
  },
  {
    image: 'https://ebazaar.mn/media/product/5166800871784638291846565346202205030347228036700509108966371115796764.png',
    name: 'Owolovo алим бөөрөлзгөнийн нухаш 200гр/40ш',
    price: 4500,
  },
];
