import React from 'react';
import styled from 'styled-components';
import Container from '../container/container';

const Input = ({
  name,
  label,
  className,
  inputRef,
  error,
  ...props
}) => (
  <StyledContainer className={className} direction='column' alignItems='flex-start' fullWidth>
    <Label error={error} htmlFor={`${name}-input`}>{label}</Label>
    <StyledInput
      id={`${name}-input`}
      name={name}
      ref={inputRef}
      error={error}
      {...props}
    />
  </StyledContainer>
);

const StyledContainer = styled(Container)`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border-width: 0 0 1px;
  border-color: ${({ error }) => (error ? '#e85d5d' : '#969696')};
  transition: 0.3s;
  font-size: 20px;
  line-height: 20px;
  padding: 0;
  height: 80px;
  box-sizing: border-box;
  color: ${({ theme }) => ( theme.text.lighter2 )};
  background-color: transparent;
  &::placeholder {
    opacity: 0.4;
  }
  &:focus {
    outline: none;
    border-color: ${({ error }) => (error ? '#e85d5d' : 'black')};
  }
  &[type="password"] {
    font-family: caption;
    letter-spacing: 1px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme, error }) => (error ? '#e85d5d' : theme.text.lighter2 )};
`;

export default Input;
