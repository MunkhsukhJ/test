import React from 'react';
import styled from 'styled-components';
import SectionContainerComponent from '../../../components/container/SectionContainer.component';
import SingleSupply from '../../../components/SingleSupply';

const SupplySection = () => (
  <SectionContainerComponent title="Нийлүүлэгч" more="/">
    <Wrapper>
      <SingleSupply />
      <SingleSupply />
      <SingleSupply />
      <SingleSupply />
      <SingleSupply />
      <SingleSupply />
      <SingleSupply />
    </Wrapper>
  </SectionContainerComponent>
);

export default SupplySection;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`;
