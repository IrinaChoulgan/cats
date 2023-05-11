import React from 'react';
import { Container, Header, Footer } from '../../components';
import styled from 'styled-components';

const StyledMap = styled.iframe`
  margin-top: 30px;
  width: 600px;
  height: 450px;
  border: 5px solid #f07f2e;
  border-radius: 10px;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <StyledWrapper>
          <h2>Ви можете знайти нас тут (тут можуть бути лінки на притулок котиків)</h2>
          <StyledMap
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325519.5888796106!2d30.202371152748935!3d50.401567849683055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2sfr!4v1683729106701!5m2!1sru!2sfr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </StyledWrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactPage;
