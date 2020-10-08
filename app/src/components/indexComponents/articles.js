import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Container from '../container/container';
import ContentWrapper from '../contentWrapper/contentWrapper';
import { loadArticles } from '../../store/articles/actions';
import Article from './article';

const MAX_ARTICLES = 4;

const Articles = ({ articles, loadArticles }) => {
  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <Container fullWidth>
      <ContentWrapper direction='column' alignItems='center'>
        <Title>Статьи</Title>
        { 
          articles.slice(0, MAX_ARTICLES).map(article => (
            <Article key={article.date.toString()} article={article} />
          ))
        }
        {
          articles.length > MAX_ARTICLES &&
          <Button>все</Button>
        }
      </ContentWrapper>
    </Container>
  );
};

const Title = styled.h2`
font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  color: ${({ theme }) => theme.text.header};
`;

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text.white};
  background-color: ${({ theme }) => theme.text.header};
  padding: 0;
  width: 220px;
  height: 64px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default connect(
  ({articles: { data }}) => ({ 
    articles: data,
  }), 
  (dispatch) => ({
    loadArticles: () => dispatch(loadArticles())
  })
)(Articles);
