import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/cat.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const LogoSite = styled.a`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.67;
  letter-spacing: 0.5px;
  color: #f07f2e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 21px;
  height: 21px;
  margin-right: 9px;
`;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const HeaderNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: fixed;
  top: 25px;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  height: 100vh;
  width: 100%;
  z-index: 2;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    position: static;
    height: auto;
    width: auto;
    background: none;
    transition: none;
    z-index: auto;
    margin-left: auto;
  }
`;

const NavigationLink = styled.a`
  color: #2c2c2c;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.5px;

  &:hover {
    color: #f07f2e;
  }
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 2;
`;
const BurgerMenu = styled.div`
  display: none;
  color: #2c2c2c;
  font-size: 24px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    z-index: 5;
  }

  &:hover {
    color: #f07f2e;
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #2c2c2c;
  position: fixed;
  font-size: 24px;
  cursor: pointer;
`;

const StyledAiOutlineHeart = styled(AiOutlineHeart)`
  height: 25px;
  width: 25px;
  cursor: pointer;

  &:hover {
    fill: #f07f2e;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/favorites');
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderWrapper>
      <LogoSite href="/">
        <LogoImg src={Logo} alt="logo" />
        Котодім
      </LogoSite>
      <StyledAiOutlineHeart onClick={handleClick} />
      <BurgerMenu onClick={toggleMenu}>{isOpen ? <CloseIcon /> : <FaBars />}</BurgerMenu>
      {isOpen && <Backdrop onClick={toggleMenu} />}

      <HeaderNavigation isOpen={isOpen}>
        <NavigationLink href="">Обрати котика</NavigationLink>
        <NavigationLink href="/donat">Задонатити котикам</NavigationLink>
        <NavigationLink href="/contacts">Контакти</NavigationLink>
      </HeaderNavigation>
    </HeaderWrapper>
  );
};

export default Header;
