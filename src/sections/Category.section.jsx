import React from 'react';
import styled from 'styled-components';
import SectionContainerComponent from '../components/container/SectionContainer.component';
import IconButtonComponent from '../components/buttons/IconButton.component';

const CategorySection = () => (
  <SectionContainerComponent title="Ангилал" more="/">
    <Wrapper>
      <IconButtonComponentStyled icon="https://media.ebazaar.link/img/category/undaa.svg">Ус, ундаа</IconButtonComponentStyled>
      <IconButtonComponentStyled icon="https://media.ebazaar.link/img/category/undaa.svg">Ус, ундаа</IconButtonComponentStyled>
      <IconButtonComponentStyled icon="https://media.ebazaar.link/img/category/undaa.svg">Ус, ундаа</IconButtonComponentStyled>
      <IconButtonComponentStyled icon="https://media.ebazaar.link/img/category/undaa.svg">Ус, ундаа</IconButtonComponentStyled>
      <IconButtonComponentStyled icon="https://media.ebazaar.link/img/category/undaa.svg">Ус, ундаа</IconButtonComponentStyled>
      <IconButtonComponentStyled icon="https://media.ebazaar.link/img/category/undaa.svg">Ус, ундаа</IconButtonComponentStyled>
      <IconButtonComponentStyled icon="https://media.ebazaar.link/img/category/undaa.svg">Ус, ундаа</IconButtonComponentStyled>
      <IconButtonComponentStyled icon="https://media.ebazaar.link/img/category/undaa.svg">Ус, ундаа</IconButtonComponentStyled>
      <IconButtonComponentStyled icon="https://media.ebazaar.link/img/category/undaa.svg">Ус, ундаа</IconButtonComponentStyled>
      <IconButtonComponentStyled icon="https://media.ebazaar.link/img/category/undaa.svg">Ус, ундаа</IconButtonComponentStyled>
      <IconButtonComponentStyled icon="https://media.ebazaar.link/img/category/undaa.svg">Ус, ундаа</IconButtonComponentStyled>
      <IconButtonComponentStyled icon="https://media.ebazaar.link/img/category/undaa.svg">Ус, ундаа</IconButtonComponentStyled>
    </Wrapper>
  </SectionContainerComponent>
);

export default CategorySection;

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
`;
const IconButtonComponentStyled = styled(IconButtonComponent)`
  border: 1px solid #eceff1;
  box-shadow: 0 20px 45px rgb(144 164 174 / 5%);
  border-radius: 12px;
  padding: 1.25rem 0;
  background-color: #fff;
  width: 100%;
  overflow-x: auto;
  transition: all 0.2s ease-in-out;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &:hover {
    border-color: #ffa400;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .icon {
    height: 50px;
  }
`;
