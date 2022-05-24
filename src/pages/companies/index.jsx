import React from 'react';
import styled from 'styled-components';
import Header from '../../layout/header';
import SectionContainerComponent from '../../components/container/SectionContainer.component';
import SingleSupply from '../../components/SingleSupply';

const Companies = () => (
  <Wrapper>
    <Header />
    <SectionContainerComponent title="Нийлүүлэгчид">
      <div className="btn-container">
        {buttons.map((btn, idx) => (
          <button type="button" key={idx}>
            {btn.label}
          </button>
        ))}
      </div>
      <div className="supply-container">
        {supplies.map((supply, idx) => (
          <SingleSupply {...supply} key={idx} />
        ))}
        <SingleSupply />
      </div>
      <div style={{ height: 400 }} />
    </SectionContainerComponent>
  </Wrapper>
);

export default Companies;

const buttons = [{ label: 'Бүгд' }, { label: 'А' }, { label: 'Б' }, { label: 'В' }];
const supplies = [{}, {}, {}, {}, {}, {}, {}, {}];
const Wrapper = styled.div`
  .btn-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .supply-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
  }
`;
