import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Breadscrumb from '../components/breadscrumb/breadscrumb';
import Button from '../components/button/button';
import Container from '../components/container/container';
import ContentWrapper from '../components/contentWrapper/contentWrapper';
import Layout from '../components/layout/layout';
import PreviewArticle from '../components/previewArticle/previewArticle';
import { loadArticles } from '../store/content/articleActions';

const breadscrumbs = [
  {
    title: 'Главная',
    href: '/',
    disabled: false,
  }, {
    title: 'Статьи',
    href: '/blog',
    disabled: true,
  }
];

const Blog = ({ articles, loadArticles, page }) => {
  useEffect(() => {
    console.log('should load articles: ', page === null, page)
    if (page === null) loadArticles(0);
  }, []);

  return (
    <Layout>
      <Container fullWidth justifyContent='center'>
        <StyledWrapper alignItems='center' direction='column'>
          <Breadscrumb breadscrumbs={breadscrumbs} />
          <Title>Статьи</Title>
          {
            articles.map(article => (
              <PreviewArticle key={article.id} article={article} />
            ))
          }
          <StyledButton>больше</StyledButton>
        </StyledWrapper>
      </Container>
    </Layout>
  );
};

const StyledButton = styled(Button)`
  margin-top: 99px;
`;

const StyledWrapper = styled(ContentWrapper)`
  padding-top: 10px;
  padding-bottom: 64px;
  // padding: 10px 0 64px;
`;

const Title = styled.h1`
  font-family: "Cormorant Infant";
  font-style: normal;
  font-weight: bold;
  font-size: 68px;
  line-height: 68px;
  margin: 32px 0;
`;

export default connect(
  ({ content: { articles: { data, page }}}) => ({
    articles: data,
    page
  }),
  dispatch => ({
    loadArticles: page => dispatch(loadArticles(page))
  })
)(Blog);