import React from 'react';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import ContentWrapper from '../contentWrapper/contentWrapper';
import Container from '../container/container';
import Link from './components/link';
import LangButton from './components/langButton';
import LANGS from '../../constants/langs';

const links = [
  { href: '/', title: 'Главная', isActive: (path) => path === '/'},
  { href: '/catalog', title: 'Каталог', isActive: (path) => path.includes('/catalog')},
  { href: '/consult', title: 'Консультации', isActive: (path) => path.includes('/consult')},
  { href: '/faq', title: 'Вопросы', isActive: (path) => path.includes('/faq')},
  { href: '/contact', title: 'Контакты', isActive: (path) => path.includes('/contact')},
]

const Header = () => {
  const { pathname } = useLocation();
  // console.log('location: ', location);
  return (
    <RootContainer id='header' alignItems='center' fullWidth>
      <ContentWrapper justifyContent='space-between' alignItems='center' maxWidth='wide'>
        <FixedWidthContainer>
          <SiteTitle>Anna Suggar</SiteTitle>
        </FixedWidthContainer>
        <Container justifyContent='center'>
          {
            links.map(({ href, title, isActive }) => (
              <StyledLink
                key={href}
                active={isActive(pathname)}
                to={href}>
                  {title}
              </StyledLink>
            ))
          }
        </Container>
        <FixedWidthContainer justifyContent='flex-end'>
          <LangButton active lang={LANGS.RU} />
          <LangButton lang={LANGS.EN} />
        </FixedWidthContainer>
      </ContentWrapper>
    </RootContainer>
  );
}

const StyledLink = styled(Link)`
  transition: 0.3s;
  :hover {
    color: ${({ theme }) => theme.text.mutted};
  }
`;

const RootContainer = styled(Container)`
  height: 100px;
`;

const FixedWidthContainer = styled(Container)`
  width: 11.25rem;
  min-width: 64px;
`;

const SiteTitle = styled.h2`
  white-space: nowrap;
  font-family: "Cormorant Infant";
`;

export default Header;
