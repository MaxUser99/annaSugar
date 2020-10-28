import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Fab from '../components/fab';
import ConsultItem from '../components/consultItem';
import { setReviewRitual } from '../../../store/content/consultActions';

const ConsultRituals = ({
  consultations,
  setReviewItem,
  navigate
}) => (
  <Layout>
    {
      consultations.map(item => (
        <ConsultItem
          id={item.id}
          item={item}
          editClickHandler={() => setReviewItem(item)}
        />
      ))
    }
    <Fab onClick={() => navigate('new')} />
  </Layout>
);

const mapStateToProps = ({ content: { ritual: { data }}}) => ({
  consultations: data
});

const mapDispatchToProps = dispatch => ({
  setReviewItem: item => dispatch(setReviewRitual(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsultRituals);