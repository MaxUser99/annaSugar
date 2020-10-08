import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Article = ({ article: { title }, clickHandler }) => (
  <div>{title}</div>
);

Article.propTypes = {
  clickHandler: PropTypes.func,
  article: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    text: PropTypes.string
  })
};

export default Article;
