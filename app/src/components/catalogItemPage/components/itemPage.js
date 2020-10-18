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
    <Container alignItems='stretch' justifyContent='space-between' fullWidth>
      <Carousel images={images} />
      <Content direction='column' fullWidth>
        <Name>{name}</Name>
        <Label>Состав</Label>
        <Compound>{compound}</Compound>
        <Label>Цена</Label>
        <Price>
          <Amount>{amount}</Amount>
          <Cents>.{cents} &#8381;</Cents>
        </Price>
        <Button>Заказать</Button>
      </Content>
    </Container>
  );
};

const Content = styled(Container)`
  max-width: 464px;
  padding-left: 20px;
`;

const Name = styled.h2``;

const Label = styled.p``;

const Compound = styled.em``;

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
