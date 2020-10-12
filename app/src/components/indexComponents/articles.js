import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Container from '../container/container';
import ContentWrapper from '../contentWrapper/contentWrapper';
import { loadArticles } from '../../store/content/articleActions';
import Article from './article';
import Button from '../button/button';

const PREVIEW_ITEMS_COUNT = 4;

const Articles = ({ articles, loadArticles }) => {
  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <Container fullWidth>
      <ContentWrapper direction='column' alignItems='center'>
        <Title>Статьи</Title>
        { 
          articles.slice(0, PREVIEW_ITEMS_COUNT).map(article => (
            <Article key={article.date.toString()} article={article} />
          ))
        }
        <Button>все</Button>
      </ContentWrapper>
    </Container>
  );
};

const Title = styled.h2`
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  color: ${({ theme }) => theme.text.header};
  margin: 64px 0 32px;
`;

export default connect(
  ({content: { articles: { data }}}) => ({ 
    articles: data,
  }), 
  (dispatch) => ({
    loadArticles: () => dispatch(loadArticles())
  })
)(Articles);
