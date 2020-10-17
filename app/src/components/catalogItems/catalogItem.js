import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Container from '../container/container';
import cartIcon from '../../assets/icons/cart.svg';

const CatalogItem = ({ item, onClick }) => {
  const { id, image, name, brief, price } = item;
  const [ imageLoaded, setImageLoaded ] = useState(false);
  const [ amount, cents ] = price.toFixed(2).split('.');

  const imageLoadHandler = () => setImageLoaded(true);
  const nameClickHandler = () => onClick(item);

  return (
    <Wrapper alignItems='stretch' justifyContent='space-between' fullWidth>
      <ImageWrapper imageLoaded={imageLoaded}>
        <img onLoad={imageLoadHandler} src={image} alt='' />
      </ImageWrapper>
      <Content alignItems='stretch' direction='column' fullWidth>
        <Name onClick={nameClickHandler} to={id}>{name}</Name>
        <Brief>{brief}</Brief>
        <Purchase alignItems='center' justifyContent='space-between' fullWidth>
          <Price>
            <Amount>{amount}</Amount>
            <Cents>.{cents} &#8381;</Cents>
          </Price>
          <Button>
            <CartIcon src={cartIcon} alt='' />
            <span>Консультация</span>
          </Button>
        </Purchase>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  padding: 32px 0;
  &:first-of-type {
    margin-top: 32px;
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid #171a1e33;
    border-radius: 1px;
  }
`;

const ImageWrapper = styled(Container)`
  max-width: 340px;
  max-height: 340px;
  & > img {
    max-width: 100%;
    max-height: 100%;
  }
  ${({ imageLoaded }) => !imageLoaded && 'min-height: 300px;'}
`;

const Content = styled(Container)`
  max-width: 464px;
  margin-left: 20px;
`;

const Purchase = styled(Container)`
  margin-top: auto;
`;

const Name = styled(Link)`
  font-family: "Cormorant Infant";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  margin: 32px 0 20px;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  text-decoration: none;
  color: ${({ theme }) => theme.text.header};
  &::after {
    content: '>';
    position: absolute;
    left: -15px;
    opacity: 0;
    transition: 0.3s;
    transition-delay: 0s;
  }
  &:hover {
    padding-left: 20px;
    &::after {
      transition-delay: 0.1s;
      left: 0;
      opacity: 1;
    }
  }
`;

const Brief = styled.p`
  font-size: 14px;
  line-height: 28px;
  max-height: 134px;
  overflow: hidden;
  margin: 0;
  color: ${({ theme }) => theme.text.default};
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

const Button = styled.button`
  margin: 0;
  padding: 0;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s;

  border: 1px solid transparent;
  padding: 10px;
  border-radius: 4px;

  & > span {
    transition: 0.3s;
    opacity: 0.3;
    color: ${({ theme }) => theme.text.lighter2};
  }
  &:hover {
    & > span {
      opacity: 0.7;
    }
    border-color: black;
  }
`;

const CartIcon = styled.img`
  margin-right: 48px;
`;

export default CatalogItem;
