import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Layout from './components/layout';
import { loadArticles } from '../../store/content/articleActions';
import List from './components/List';

const Articles = ({ articles, page, loadArticles }) => {
  useEffect(() => {
    if (page === null) loadArticles();
  }, []);

  const itemClickHandler = item => {
    console.log('click on : ', item);
  }

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
            itemClickHandler={itemClickHandler}
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
    loadArticles: page => dispatch(loadArticles(page))
  })
)(Articles);
