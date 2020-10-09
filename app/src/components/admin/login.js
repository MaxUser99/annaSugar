import React from 'react';
import styled from 'styled-components';
import Container from '../container/container';
import ContentWrapper from '../contentWrapper/contentWrapper';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => console.log(data);

  console.log('errors: ', errors);

  return (
    <StyledContainer>
      <ContentWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>
            Please login
          </Title>
          <Input name='login' type='text' ref={register({ required: true })} />
          <Input name='password' type='password' ref={register({ required: true })} />
          <Button type='submit'>log in</Button>
        </Form>
      </ContentWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  min-height: 100vh;
  position: relative;
`;

const Form = styled.form``;

const Title = styled.h2``;

const Input = styled.input``;

const Button = styled.button``;

export default Login;
