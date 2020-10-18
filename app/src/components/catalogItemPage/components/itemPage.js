import React from 'react';
import styled from 'styled-components';
import Container from '../../container/container';
import Carousel from './Carousel';
import Button from '../../button/button';

const propGetter = (obj, propName, placeholder = '-') => (obj && obj[propName]) ? obj[propName] : placeholder;

const ItemPage = ({ item, isLoading }) => {
  console.log('item: ', item);
  const name = propGetter(item, 'name');
  const compound = propGetter(item, 'compound');
  const price = propGetter(item, 'price', null);
  const images = propGetter(item, 'images', []);
  const [ amount, cents ] = price
    ? price.toFixed(2).split('.')
    : ['-', ''];
  
  return (
    <RootContainer alignItems='stretch' justifyContent='space-between' fullWidth>
      <Carousel images={images} />
      <Content direction='column' fullWidth>
        <Name $loading={isLoading}>{name}</Name>
        <Label>Состав</Label>
        <Compound>{compound}</Compound>
        <Label>Цена</Label>
        <Price>
          <Amount>{amount}</Amount>
          <Cents>.{cents} &#8381;</Cents>
        </Price>
        <Button>Заказать</Button>
      </Content>
    </RootContainer>
  );
};

const RootContainer = styled(Container)`
  padding-top: 36px;
`;

const Content = styled(Container)`
  max-width: 464px;
  max-height: 390px;
  padding-left: 20px;
  & > button {
    margin-top: auto;
  }
`;

const Name = styled.h2`
  font-family: ${({ $loading }) => !$loading && "Cormorant Infant"};
  // font-family: ;
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  margin: 0 0 32px;
  color: ${({ theme }) => theme.text.lighter2};
`;

const Label = styled.p`
  font-size: 14px;
  line-height: 14px;
  margin: 0 0 5px;
  color: ${({ theme }) => theme.text.mutted};
`;

const Compound = styled.p`
  font-size: 18px;
  line-height: 32px;
  margin: 0 0 20px;
  color: ${({ theme }) => theme.text.lighter2};
`;

const Price = styled.p``;

const Amount = styled.span`
  font-weight: 300;
  font-size: 35px;
  line-height: 43px;
  letter-spacing: 1px;
`;

const Cents = styled.span`
  font-weight: 300;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 1px;
`;


export default ItemPage;
