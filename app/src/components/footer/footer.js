import React from 'react';
import styled from 'styled-components';
import Container from '../container/container';
import ContentWrapper from '../contentWrapper/contentWrapper';
import Button from '../button/button';
import vkIcon from '../../assets/icons/vk-black.svg';
import instaIcon from '../../assets/icons/instagram.svg';

const Footer = () => (
  <>
    <Block1 fullWidth>
      <ContentWrapper direction='column' alignItems='center'>
        <Header>Хочешь узнать о всем первым</Header>
        <Button outlined>Подпишись</Button>
      </ContentWrapper>
    </Block1>
    <Block2 fullWidth>
      <ContentWrapper justifyContent='space-between' alignItems='center'>
        <Text>Anna Sugar&copy;</Text>
        <Text>All rights reserved</Text>
        <Container>
          <SocialButton>
            <img src={vkIcon} />
          </SocialButton>
          <SocialButton>
            <img src={instaIcon} />
          </SocialButton>
        </Container>
      </ContentWrapper>
    </Block2>
  </>
);

const Block2 = styled(Container)`
  padding: 26px 0 39px;
`;

const Block1 = styled(Container)`
  background-color: ${({ theme }) => theme.color.darkBeige};
  padding: 64px 0;
`;

const Header = styled.h2`
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  margin: 0 0 32px;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => theme.text.lighter2};
`;

const SocialButton = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 6px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid black;
`;

export default Footer;
