import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout/faqLayout';
import { catalogLinks } from '../../constants/links';

const Beads = ({ data }) => (
  <Layout title='Каталог' tabs={catalogLinks}>
  </Layout>
);

export default connect(
  ({ content: { beads: { data }}}) => ({
    beads: data
  }),
  null
)(Beads);
