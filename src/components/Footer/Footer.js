import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';
import icons from '../../assets/icons.svg';
import Logo from '../../assets/cat.png';

const FooterSection = styled.footer`
  margin-top: 60px;
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: #0f3f3c;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterText = styled.p`
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #ffffff;
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 8px;
`;

const SocialIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: #ffffff;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  &:hover {
    background-color: #ffffff;
  }
  &:hover {
    ${SocialIcon} {
      fill: #f07f2e;
    }
  }
`;

const SocialText = styled.p`
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #ffffff;
  text-align: right;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContainer>
          <FooterText>
            <img src={Logo} alt="логотип сайту" width="24" height="24" />
            Котики — то щастя. <br />
            Забирай, люби й ставай щасливішим.
          </FooterText>

          <section class="social">
            <SocialText>Соцмережі</SocialText>

            <SocialLinks>
              <li>
                <SocialLink href="">
                  <SocialIcon>
                    <use xlinkHref={`${icons}#icon-instagram`} />
                  </SocialIcon>
                </SocialLink>
              </li>
              <li>
                <SocialLink href="">
                  <SocialIcon>
                    <use xlinkHref={`${icons}#icon-facebook`}></use>
                  </SocialIcon>
                </SocialLink>
              </li>
              <li>
                <SocialLink href="">
                  <SocialIcon>
                    <use xlinkHref={`${icons}#icon-youtube`} />
                  </SocialIcon>
                </SocialLink>
              </li>
              <li>
                <SocialLink href="">
                  <SocialIcon>
                    <use xlinkHref={`${icons}#icon-tiktok`} />
                  </SocialIcon>
                </SocialLink>
              </li>
            </SocialLinks>
          </section>
        </FooterContainer>
      </Container>
    </FooterSection>
  );
};

export default Footer;
