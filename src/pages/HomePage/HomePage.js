import React from 'react';
import { Header, Container, Hero, Cats, Gallery, Footer } from '../../components';

const HomePage = () => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Cats />
        <Gallery />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
