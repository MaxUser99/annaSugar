import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout/faqLayout';
import ExpansionPanel from '../../components/expansionPanel/expansionPanel';
import { catalogLinks } from '../../constants/links';

const Bracelets = ({ data }) => (
  <Layout title='Каталог' tabs={catalogLinks}>
  </Layout>
);

export default connect(
  ({ content: { bracelets: { data }}}) => ({
    bracelets: data
  }),
  null
)(Bracelets);
