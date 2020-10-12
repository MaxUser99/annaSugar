import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import Container from '../container/container';
import ContentWrapper from '../contentWrapper/contentWrapper';
import { loadArticles } from '../../store/content/articleActions';
import PreviewArticle from '../previewArticle/previewArticle';
import Button from '../button/button';

const PREVIEW_ITEMS_COUNT = 4;

const Articles = ({ articles, loadArticles, page }) => {
  const buttonClickHandler = () => {
    navigate('/blog');
  }

  useEffect(() => {
    if (page === null) loadArticles(0);
  }, []);

  return (
    <Container fullWidth>
      <ContentWrapper direction='column' alignItems='center'>
        <Title>Статьи</Title>
        { 
          articles.slice(0, PREVIEW_ITEMS_COUNT).map(article => (
            <PreviewArticle key={article.id} article={article} />
          ))
        }
        <StyledButton onClick={buttonClickHandler}>все</StyledButton>
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

const StyledButton = styled(Button)`
  margin-top: 64px;
`;

export default connect(
  ({content: { articles: { data, page }}}) => ({ 
    articles: data,
    page
  }), 
  (dispatch) => ({
    loadArticles: page => dispatch(loadArticles(page))
  })
)(Articles);
