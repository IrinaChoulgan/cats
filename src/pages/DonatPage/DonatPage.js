import React from 'react';
import { Header, Footer, Container } from '../../components';
import QR from '../../assets/QR.png';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const DonatPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <StyledWrapper>
          <h2>
            Тут може бути QR-код з реквізитами для підтримки котиків, а поки що туди "вшите" зображення
            котика)
          </h2>
          <img src={QR} alt="QR" width={'400px'} />
        </StyledWrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default DonatPage;
