import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Header, Footer, Container } from '../../components';
import Favorite from '../../assets/favorite.png';

import { AiFillDelete } from 'react-icons/ai';

const WrapperImg = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
const StyledTitle = styled.h2`
  text-align: center;
`;
const StyledImg = styled.img`
  border-radius: 16px;
  object-fit: cover;
`;
const Wrapper = styled.div`
  position: relative;
`;

const StyledIcon = styled(AiFillDelete)`
  position: absolute;
  width: 33px;
  height: 35px;
  top: 20px;
  right: 20px;
  cursor: pointer;

  &:hover {
    fill: #f07f2e;
  }
`;
const ButtonHome = styled.button`
  border: 2px solid #f07f2e;
  border-radius: 10px;
  padding: 8px;
  transition: 0.5s;

  &:hover {
    background-color: #f07f2e;
    transform: translate(0, -3px);
  }
`;

const FavoritesPage = () => {
  const [cats, setCats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCats = localStorage.getItem('favoriteCats');
    if (savedCats) {
      setCats(JSON.parse(savedCats));
    }
  }, []);

  const handleClick = (index) => {
    const newCats = [...cats];
    newCats.splice(index, 1);
    setCats(newCats);
    localStorage.setItem('favoriteCats', JSON.stringify(newCats));
  };
  const onBtnClick = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <Container>
        <StyledTitle>Ваші фаворитні котики</StyledTitle>
        <ButtonHome onClick={onBtnClick}>На головну</ButtonHome>
        <WrapperImg>
          {cats.length === 0 ? (
            <>
              <h3>У Вас ще немає фаворитних котиків)</h3>
              <img src={Favorite} alt="cat" />
            </>
          ) : (
            cats?.map((cat, index) => (
              <Wrapper key={index}>
                <StyledImg src={cat} alt="" />
                <StyledIcon onClick={() => handleClick(index)} />
              </Wrapper>
            ))
          )}
        </WrapperImg>
      </Container>
      <Footer />
    </>
  );
};

export default FavoritesPage;
