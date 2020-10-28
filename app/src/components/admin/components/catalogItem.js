import React from 'react';
import Preview from '../../preview/preview';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Container from '../../container/container';

const CatalogItem = ({
  item,
  editClickHandler
}) => (
  <Wrapper direction='column' fullWidth>
    <Container>
      <Date>
        {
          item.date
          ? item.date.toLocaleDateString()
          : '-'
        }
      </Date>
      <Separator>|</Separator>
      <EditLink onClick={editClickHandler} to={`${item.id}`}>Edit</EditLink>
    </Container>
    <Preview
      image={`/${item.images[0]}`}
      name={item.name}
      description={item.brief}
    />
  </Wrapper>
)

const Wrapper = styled(Container)`
  :not(:first-of-type) {
    margin-top: 25px;
  }
`;

const Date = styled.p``;

const Separator = styled.span`
  margin: 0 10px
`;

const EditLink = styled(Link)`
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
    transition: 0.3s;
    :hover {
      color: ${({ theme }) => theme.text.mutted}; 
    }
`;

export default CatalogItem;
