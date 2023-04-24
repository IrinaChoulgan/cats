import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/cat.png';

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
  gap: 40px;
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

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoSite href="/">
        <LogoImg src={Logo} alt="logo" />
        Котодім
      </LogoSite>
      <HeaderNavigation>
        <NavigationLink href="">Обрати котика</NavigationLink>
        <NavigationLink href="">Задонатити котикам</NavigationLink>
        <NavigationLink href="">Контакти</NavigationLink>
      </HeaderNavigation>
    </HeaderWrapper>
  );
};

export default Header;
