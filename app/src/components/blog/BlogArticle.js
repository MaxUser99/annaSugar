import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loadReviewArticle, setReviewArticle } from '../../store/content/articleActions'; 
import Breadscrumb from '../breadscrumb/breadscrumb';
import ArticleLayout from './ArticleLayout';
import Loader from './loader';
import Button from '../button/button';

const baseBreadscrumbs = [
  {
    title: 'Главная',
    href: '/',
    disabled: false,
  }, {
    title: 'Статьи',
    href: '/blog',
    disabled: false,
  }
];

const BlogArticle = ({
  article,
  loadReviewArticle,
  clearReviewArticle,
  navigate
}) => {
  const [ shouldRedirect, setRedirect ] = useState(false);
  const [ isArticleLoading, setLoading ] = useState(false);

  const breadscrumbs = useMemo(() => {
    const title = article
      ? article.title
      : '...';

    return [...baseBreadscrumbs, { title, href: '#', disabled: true }];
  }, [ article ]);

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);
      const article = await loadReviewArticle();
      setLoading(false);
      if (!article) setRedirect(true);
    }
    if (!article) loadArticle();
    return () => clearReviewArticle();
  }, []);

  const redirectClickHandler = () => navigate('/blog');

  return (
    <>
      <Breadscrumb breadscrumbs={breadscrumbs} />
      { article && <ArticleLayout article={article} /> }
      { isArticleLoading && <StyledLoader /> }
      {
        shouldRedirect && <>
          <ErrorText>such article doesnt exist</ErrorText>
          <RedirectButton onClick={redirectClickHandler}>Посмотреть все статьи</RedirectButton>
        </>
      }
    </>
  )
};

const StyledLoader = styled(Loader)`
  margin: auto;
`;

const ErrorText = styled.p`
  margin-top: auto;
`;

const RedirectButton = styled(Button)`
  margin-bottom: auto;
`;

export default connect(
  ({ content: { articles: { reviewItem }}}) => ({
    article: reviewItem
  }),
  // (dispatch, { articleId, navigate }) => {
  //   return {
  //   loadReviewArticle: () => dispatch(loadReviewArticle(parseInt(articleId, 10))),
  //   clearReviewArticle: () => dispatch(setReviewArticle(null)),
  //   navigate
  // }}
  (dispatch, { articleId, navigate }) => ({
    loadReviewArticle: () => dispatch(loadReviewArticle(parseInt(articleId, 10))),
    clearReviewArticle: () => dispatch(setReviewArticle(null)),
    navigate
  })
)(BlogArticle);
