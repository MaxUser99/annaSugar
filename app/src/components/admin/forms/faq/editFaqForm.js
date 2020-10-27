import React, { useEffect } from 'react';
import FaqForm from './faqForm';
import Button from '../../../button/button';
import { connect } from 'react-redux';
import { loadFaqs, editFAQ } from '../../../../store/content/faqActions';

const EditFaqForm = ({ initial, loadFaqs, editFAQ, id }) => {
  const submitHandler = () => {
    console.log('submit');
  }

  useEffect(() => {
    async function loadOnEditFAQ() {
      const allFaqs = await loadFaqs();
      const numId = +id;
      const targetFaq = allFaqs.find(x => x.id === numId);
      if (targetFaq) editFAQ(targetFaq);
      else console.log('should navigate'); 
    }

    if (!initial) loadOnEditFAQ();
  }, []);

  return (
    <FaqForm
      disabled={!initial}
      initial={initial}
      buttons={null}
      formProps={{
        onSubmit: submitHandler
      }}
    />
  );
}

const mapStateToProps = ({ content: { faq: { onEdit }}}) => ({
  initial: onEdit || undefined
});

const mapDispatchToProps = dispatch => ({
  loadFaqs: () => dispatch(loadFaqs()),
  editFAQ: faq => dispatch(editFAQ(faq)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFaqForm);
