import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import styled from 'styled-components';
import loadFAQs from '../../../HOCs/loadFAQs';
import Container from '../../container/container';
import ExpansionPanel from '../../expansionPanel/expansionPanel';
import Layout from '../components/layout';

const FaqAstro = ({ data }) => (
  <Layout>
    {
      data.map(x => (
        <Container key={x.id} direction='column' fullWidth>
          <Container>
            <Date>{x.date.toLocaleDateString()}</Date>
            <Separator>|</Separator>
            <EditLink to='#'>Edit</EditLink>
          </Container>
          <StyledPanel key={x.id} title={x.title} text={x.text} />
        </Container>
      ))
    }
  </Layout>
);

const Date = styled.p``;

const Separator = styled.span`
  margin: 0 10px
`;

const StyledPanel = styled(ExpansionPanel)`
    margin-top: 0;
`;

const EditLink = styled(Link)`
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
    transition: 0.3s;
    :hover {
      color: ${({ theme }) => theme.text.mutted}; 
    }
`;

const mapStateToProps = ({ content: { faq: { astro }}}) => ({
  data: astro
});

const mapDispatchToProps = null;

export default loadFAQs(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FaqAstro)
);