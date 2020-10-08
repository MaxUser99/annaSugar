import React from 'react';
import styled from 'styled-components';
import Container from '../container/container';
import ContentWrapper from '../contentWrapper/contentWrapper';
import ImageSrc from '../../assets/images/main.svg';
import FabIcon from '../../assets/images/whatsup-fab.svg';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const MainBlock = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: {eq: "image.png"}) {
        childImageSharp {
          fixed(width: 366) {
            aspectRatio
            src
            srcSet
            width
            height
          }
        } 
      }
    }  
  `);
  console.log(data)

  return (
    <Container fullWidth>
      <StyledWrapper alignItems='flex-start'>
        <TextContainer direction='column'>
          <Title>Anna Sugar</Title>
          <Paragraph>
            Здравствуйте! Добро пожаловать на мой официальный сайт. <br />
            Если вы попали на мой сайт, значит в вашей жизни пришло время перемен. 
          </Paragraph>
          <Paragraph>
            Меня зовут <b>Сахарова Анна.</b><br /> 
            Я анализирую и нахожу решения проблем в картах.
          </Paragraph>
          <Paragraph>
            <b>Чем я могу быть вам полезна?</b><br />
            С помощью астрологии я расскажу куда вам двигаться, как улучшить вашу жизнь по всем сферам. После консультации вы поймете, как оттолкнуться от дна и увидите путь вверх!
          </Paragraph>
          <Paragraph>
            Я владею различными методиками коррекции судьбы и помогу вам изменить вашу жизнь с помощью различных знаний. 
            В своей работе помимо астрологии я использую карты Таро, ритуалы на основе Рун, а также технику Access Bars.
          </Paragraph>
          <Paragraph><StyledLink>А еще...</StyledLink></Paragraph>
        </TextContainer>
        <div>
          <Img fixed={data.file.childImageSharp.fixed} />
        </div>
        <Fab><FabImg src={FabIcon} alt='' /></Fab>
      </StyledWrapper>
    </Container>
  );
};

const TextContainer = styled(Container)`
  max-width: 50.5%;
  padding-right: 80px;
`;

const Title = styled.h1`
  font-family: "Cormorant Infant";
  font-style: normal;
  font-weight: bold;
  font-size: 68px;
  line-height: 68px;
  margin: 0 0 10px;
`;

const Paragraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 28px;
`;

const StyledWrapper = styled(ContentWrapper)`
  position: relative;
  margin-top: 20px;
`;

const Fab = styled.button`
  border: none;
  border-radius: 50%;
  padding: 0;
  outline: none;
  background: transparent;
  margin-top: auto;
  position: absolute;
  right: 3.25%;
  top: 517px;
  width: 98px;
  height: 98px;
  cursor: pointer;
`;

const StyledLink = styled.a`
  text-decoration: underline;
`;

const FabImg = styled.img``;

export default MainBlock;
