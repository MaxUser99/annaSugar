import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Button from '../../button/button';
import Container from '../../container/container';
import backArrow from '../../../assets/icons/back-arrow.svg';
import LangButton from '../../header/components/langButton';
import LANGS from '../../../constants/langs';

const FaqForm = ({
  initial = {},
  headerText
}) => {
  const [ lang, setLang ] = useState(LANGS.RU)
  const date = initial.date || new Date();

  return (
    <Layout>
      <FormHeader>
        <BackButton>
          <img src={backArrow} alt='' />
        </BackButton>
        <PageTitle>
          {headerText}
        </PageTitle>
      </FormHeader>
      <SubHeader>
        <Date>{date.toString()}</Date>
        <LangButtons>
          <LangButton lang={LANGS.RU} active={lang === LANGS.RU} />
          <LangButton lang={LANGS.EN} active={lang === LANGS.EN} />
        </LangButtons>
      </SubHeader>
    </Layout>
  )
}

const BackButton = styled(Button)``;

const FormHeader = styled(Container)``;

const PageTitle = styled.h3``;

const SubHeader = styled(Container)``;

const LangButtons = styled(Container)``;

export default FaqForm;
