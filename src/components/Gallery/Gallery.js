import React from 'react';
import styled from 'styled-components';
import { data } from './data';

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

const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 40px;
`;

const GaleryItem = styled.li`
  flex-basis: calc((100% - 5 * 16px) / 6);
  border-radius: 16px;
  overflow: hidden;

  &:hover {
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
  }

  @media screen and (max-width: 768px) {
    flex-basis: calc((100% - 2 * 16px) / 3);
  }
`;

const Gallery = () => {
  return (
    <GallerySection>
      <GalleryTitle>Котики, які вже знайшли сім’ю</GalleryTitle>
      <GalleryText>
        Ти тільки поглянь, скільки ніжності! <br />
        На місці цих задоволених людей можеш бути ти.
      </GalleryText>
      <GalleryList>
        {data.map((data, index) => (
          <GaleryItem key={index}>
            <img src={data.src} alt="galery item" />
          </GaleryItem>
        ))}
      </GalleryList>
    </GallerySection>
  );
};

export default Gallery;
