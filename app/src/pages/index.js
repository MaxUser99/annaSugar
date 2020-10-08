import React from 'react';
import MainBlock from '../components/indexComponents/mainBlock';
import Articles from '../components/indexComponents/articles';
import Layout from '../components/layout/layout';

const Home = () => (
  <Layout>
    <MainBlock />
    <Articles />
  </Layout>
);

export default Home;
