import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';

const GallerySection = styled.p`
  margin-top: 60px;
`;

const GalleryTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.5px;
  color: #2c2c2c;
`;

const GalleryText = styled.p`
  margin-top: 8px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #2c2c2c;
`;

const Gallery = () => {
  return (
    <GallerySection>
      <GalleryTitle>Котики, які вже знайшли сім’ю</GalleryTitle>
      <GalleryText>
        Ти тільки поглянь, скільки ніжності! <br />
        На місці цих задоволених людей можеш бути ти.
      </GalleryText>
      <Slider />
    </GallerySection>
  );
};

export default Gallery;
