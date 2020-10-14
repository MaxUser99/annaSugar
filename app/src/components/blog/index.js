import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Breadscrumb from '../breadscrumb/breadscrumb';
import PreviewArticle from '../previewArticle/previewArticle';
import Button from '../button/button';

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

const BlogIndex = ({ articles }) => (
  <>
    <Breadscrumb breadscrumbs={breadscrumbs} />
    <Title>Статьи</Title>
    {
      articles.map(article => (
        <PreviewArticle key={article.id} article={article} />
      ))
    }
    <StyledButton>больше</StyledButton>
  </>
);

const StyledButton = styled(Button)`
  margin-top: 99px;
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
  ({ content: { articles: { data }}}) => ({
    articles: data
  }),
  null
)(BlogIndex);
