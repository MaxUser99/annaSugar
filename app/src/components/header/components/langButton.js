import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ruIcon from '../../../assets/lang/ru-active.svg';
import ruIconMutted from '../../../assets/lang/ru-mutted.svg';
import enIcon from '../../../assets/lang/en-active.svg';
import enIconMutted from '../../../assets/lang/en-mutted.svg';

const icons = {
  ru: { active: ruIcon, mutted: ruIconMutted },
  en: { active: enIcon, mutted: enIconMutted },
};

const LangButton = ({ lang, active }) => {
  const icon = icons[lang][active ? 'active' : 'mutted'];

  return (
    <StyledButton>
      <Img src={icon} alt='' />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  outline: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0 10px;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
`;

LangButton.propTypes = {
  lang: PropTypes.oneOf([ 'ru', 'en' ]).isRequired,
  active: PropTypes.bool
};

export default LangButton;
