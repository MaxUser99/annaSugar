import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Layout from '../../components/layout';
import Button from '../../../button/button';
import Container from '../../../container/container';
import backArrow from '../../../../assets/icons/back-arrow.svg';
import LangButton from '../../../header/components/langButton';
import LANGS from '../../../../constants/langs';
import { navigate } from 'gatsby';
import Input from '../../../input/input';

const FaqForm = ({
  initial = {},
  buttons,
  formProps,
  disabled
}) => {
  const [ lang, setLang ] = useState(LANGS.RU)
  const {
    register,
    handleSubmit,
    formState: { isDirty},
    ...rest 
  } = useForm();

  const backClickHandler = () => navigate('../');              

  const langClickHandler = lang => () => setLang(lang);

  const { onSubmit, ...restFormProps } = formProps;
  const date = initial.date || new Date();

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
          <LangButton onClick={langClickHandler(LANGS.RU)} lang={LANGS.RU} active={lang === LANGS.RU} />
          <LangButton onClick={langClickHandler(LANGS.EN)} lang={LANGS.EN} active={lang === LANGS.EN} />
        </LangButtons>
      </SubHeader>
      <Form onSubmit={handleSubmit(onSubmit)} {...restFormProps}>
        <Input 
          name='title'
          label='title'
          disabled={disabled}
          placeholder='Enter FAQ title'
          inputRef={register({ required: true })}
          defaultValue={initial.title} />
        <Input 
          name='text'
          label='text'
          disabled={disabled}
          placeholder='Enter FAQ text'
          inputRef={register({ required: true })}
          defaultValue={initial.text}
          multiline />
        <Buttons justifyContent='center' fullWidth>
          { buttons(isDirty) }
        </Buttons>
      </Form>
    </Layout>
  )
}

const Buttons = styled(Container)`
  button:not(:last-of-type) {
    margin-right: 20px;
  }
`;

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

export default FaqForm;
