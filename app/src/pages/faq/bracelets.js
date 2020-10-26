import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout/faqLayout';
import ExpansionPanel from '../../components/expansionPanel/expansionPanel';
import { faqLinks } from '../../constants/links';
import loadFAQs from '../../HOCs/loadFAQs';

const Bracelets = ({ data }) => (
  <Layout title='Вопросы' tabs={faqLinks}>
    {
      data.map(({ title, text }, i) => (
        <ExpansionPanel key={i} title={title} text={text} />
      ))
    }
  </Layout>
);

export default loadFAQs(
  connect(
    ({ content: { faq: { bracelets }}}) => ({
      data: bracelets
    }),
    null
  )(Bracelets)
);
