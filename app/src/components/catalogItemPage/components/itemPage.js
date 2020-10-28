import React from 'react';
import styled from 'styled-components';
import Container from '../../container/container';
import Carousel from './Carousel';
import Button from '../../button/button';
import Price from '../../price/price';

const propGetter = (obj, propName, placeholder = '-') => (obj && obj[propName]) ? obj[propName] : placeholder;

const ItemPage = ({ item, isLoading }) => {
  const name = propGetter(item, 'name');
  const compound = propGetter(item, 'compound');
  const images = propGetter(item, 'images', []);
  const price = propGetter(item, 'price', null);
  
  return (
    <RootContainer alignItems='stretch' justifyContent='space-between' fullWidth>
      <Carousel images={images} />
      <Content direction='column' fullWidth>
        <Name $loading={isLoading}>{name}</Name>
        <Label>Состав</Label>
        <Compound>{compound}</Compound>
        <Label>Цена</Label>
        <Price>{price}</Price>
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

export default ItemPage;
