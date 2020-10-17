import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../contentWrapper/contentWrapper';
import Container from '../container/container';
import Link from './components/link';
import LangButton from './components/langButton';

const Header = () => (
  <Container id='header' fullWidth>
    <ContentWrapper justifyContent='space-between' maxWidth='wide'>
      <FixedWidthContainer>
        <SiteTitle>Anna Suggar</SiteTitle>
      </FixedWidthContainer>
      <Container justifyContent='center'>
        <Link to='/'>Главная</Link>
        <Link to='/catalog'>Каталог</Link>
        <Link to='/consult'>Консультации</Link>
        <Link to='/faq/astro'>Вопросы</Link>
        <Link to='/contact'>Контакты</Link>
      </Container>
      <FixedWidthContainer justifyContent='flex-end'>
        <LangButton active lang='ru' />
        <LangButton lang='en' />
      </FixedWidthContainer>
    </ContentWrapper>
  </Container>
);

const FixedWidthContainer = styled(Container)`
  width: 11.25rem;
  min-width: 64px;
`;

const SiteTitle = styled.h2`
  white-space: nowrap;
`;

export default Header;
