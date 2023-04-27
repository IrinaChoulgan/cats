import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/hero.png';

const SectionWrapper = styled.div`
  position: relative;
  height: 480px;
  border-radius: 16px;
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const SectionHero = styled.section`
  position: absolute;
  left: 28px;
  bottom: 52px;
  padding: 24px;
  background: #0f3f3c;
  border-radius: 16px;
  min-width: 432px;

  @media screen and (max-width: 768px) {
    min-width: 150px;
    left: 0;
    bottom: 15px;
    padding: 15px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 32px;
  line-height: 32px;
  letter-spacing: 1.25px;
  color: #ffffff;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const HeroText = styled.p`
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Hero = () => {
  return (
    <SectionWrapper>
      <SectionHero>
        <HeroTitle>Привіт, людино</HeroTitle>
        <HeroText>
          Бракує в житті шовкових лапок, м’якенького пухнастого животика, теплого муррркотіння й веселого
          розгардіяшу?Візьми собі котика.
        </HeroText>
      </SectionHero>
    </SectionWrapper>
  );
};

export default Hero;
