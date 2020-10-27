import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Button from '../../button/button';
import Container from '../../container/container';
import backArrow from '../../../assets/icons/back-arrow.svg';
import LangButton from '../../header/components/langButton';
import LANGS from '../../../constants/langs';
import { navigate } from 'gatsby';
import Input from '../../input/input';

const FaqForm = ({
  initial = {}
}) => {
  const [ lang, setLang ] = useState(LANGS.RU)
  const date = initial.date || new Date();

  const backClickHandler = () => navigate('../');
  console.log('init')
  return (
    <Layout>
      <FormHeader alignItems='center' justifyContent='center' fullWidth>
        <BackButton onClick={backClickHandler}>
          <img src={backArrow} alt='' />
        </BackButton>
        <PageTitle>
          Edit FAQ
        </PageTitle>
      </FormHeader>
      <SubHeader justifyContent='space-between' fullWidth>
        <Date>{date.toString()}</Date>
        <LangButtons>
          <LangButton lang={LANGS.RU} active={lang === LANGS.RU} />
          <LangButton lang={LANGS.EN} active={lang === LANGS.EN} />
        </LangButtons>
      </SubHeader>
      <Form>
        <Input 
          name='title'
          label='title'
          placeholder='Enter FAQ title'
          defaultValue={initial.title} />
        <Input 
          name='text'
          label='text'
          placeholder='Enter FAQ text'
          defaultValue={initial.text}
          multiline />
      </Form>
    </Layout>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  > div:first-of-type {
    margin-top: 40px;
  }
`;

const BackButton = styled(Button)`
  position: absolute;
  left: 0;
  width: auto;
  height: auto;
  padding: 7px;
  background: transparent;
  box-shadow: none;
  border: 1px solid transparent;
  :hover {
    border-color: black;
    background-color: transparent;
  }
  img {
    width: 18px;
    height: 18px;
  }
`;

const FormHeader = styled(Container)`
  position: relative;
  margin-top: 64px;
  margin-bottom: 20px;
`;

const PageTitle = styled.h3``;

const SubHeader = styled(Container)`
  border-bottom: 1px solid black;
  padding-bottom: 16px;
  `;

const LangButtons = styled(Container)``;

const mapStateToProps = ({ content: { faq: { onEdit }}}) => ({
  initial: onEdit || undefined
});

export default connect(mapStateToProps)(FaqForm);
