import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import { loadArticles } from '../../../store/content/articleActions';
import List from '../components/List';
import { setReviewArticle } from '../../../store/content/articleActions';

const Articles = ({
  articles,
  page,
  loadArticles,
  setReviewArticle
}) => {
  useEffect(() => {
    if (page === null) loadArticles();
  }, []);

  return (
    <Layout>
      {
        articles && <>
          <List
            data={articles}
            imageField='image'
            nameField='title'
            descriptionField='text'
            dateField='date'
            itemClickHandler={setReviewArticle}
          />
        </>
      }
    </Layout>
  );
}

export default connect(
  ({ content: { articles: { data, page }}}) => ({
    page,
    articles: data
  }),
  dispatch => ({
    loadArticles: page => dispatch(loadArticles(page)),
    setReviewArticle: article => dispatch(setReviewArticle(article))
  })
)(Articles);
