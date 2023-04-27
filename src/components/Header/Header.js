import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/cat.png';
import { FaBars, FaTimes } from 'react-icons/fa';

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
  background: #fff;
  transition: all 0.3s ease-in-out;
  z-index: 1;
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

const BurgerMenu = styled.div`
  display: none;
  color: #2c2c2c;
  font-size: 24px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    z-index: 2;
  }

  &:hover {
    color: #f07f2e;
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #2c2c2c;
  font-size: 24px;
  cursor: pointer;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderWrapper>
      <LogoSite href="/">
        <LogoImg src={Logo} alt="logo" />
        Котодім
      </LogoSite>
      <BurgerMenu onClick={toggleMenu}>{isOpen ? <CloseIcon /> : <FaBars />}</BurgerMenu>
      <HeaderNavigation isOpen={isOpen}>
        <NavigationLink href="">Обрати котика</NavigationLink>
        <NavigationLink href="">Задонатити котикам</NavigationLink>
        <NavigationLink href="">Контакти</NavigationLink>
      </HeaderNavigation>
    </HeaderWrapper>
  );
};

export default Header;
