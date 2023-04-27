import React from 'react';
import styled from 'styled-components';

import { data } from './data';

const SectionCats = styled.section`
  margin-top: 60px;
`;

const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.67;
  letter-spacing: 0.5px;
  color: #2c2c2c;
`;

const CatList = styled.ul`
  display: flex;
  gap: 40px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CatItem = styled.li`
  overflow: hidden;
  border-radius: 16px;

  &:hover {
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  }
  @media screen and (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

const CatsContent = styled.div`
  padding: 16px 8px 24px 8px;
`;

const ContentTitle = styled.h3`
  margin-bottom: 8px;
`;

const ContentText = styled.p`
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #2c2c2c;
`;

const Cats = () => {
  return (
    <SectionCats>
      <SectionTitle>Ці друзяки готові приймати твою любов і піклування</SectionTitle>
      <CatList>
        {data.map((data, index) => (
          <CatItem key={index}>
            <img src={data.src} alt="" />
            <CatsContent>
              <ContentTitle>{data.title}</ContentTitle>
              <ContentText>{data.text}</ContentText>
            </CatsContent>
          </CatItem>
        ))}
      </CatList>
    </SectionCats>
  );
};

export default Cats;
