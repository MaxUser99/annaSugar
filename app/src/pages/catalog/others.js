import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadOthers } from '../../store/content/catalogActions';
import { catalogLinks } from '../../constants/links';
import Layout from '../../components/layout/faqLayout';
import CatalogItem from '../../components/catalogItem/catalogItem';

const Others = ({ others, page, loadOthers }) => {
  useEffect(() => {
    if (page === null) loadOthers(0);
  }, []);

  return (
    <Layout title='Каталог' tabs={catalogLinks}>
      {
        others.map(item => (
          <CatalogItem key={item.id} item={item} />
        ))
      }
    </Layout>
  );
}

export default connect(
  ({ content: { others: { data, page }}}) => ({
    others: data,
    page
  }),
  dispatch => ({
    loadOthers: page => dispatch(loadOthers(page))
  })
)(Others);
