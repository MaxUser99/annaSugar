import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Container from '../../container/container';
import Layout from '../components/layout';
import Fab from '../components/fab';
import Preview from '../../preview/preview';
import { loadBracelets, setReviewBracelet } from '../../../store/content/catalogActions';

const CatalogBracelets = ({
  bracelets,
  page,
  loadBracelets,
  setReviewBracelet,
  navigate
}) => {
  useEffect(() => {
    if (page === null) loadBracelets(0);
  }, []);

  const newClickHandler = () => navigate('new');

  return (
    <Layout>
      {
        bracelets.map(item => (
          <Wrapper key={item.id} direction='column' fullWidth>
            <Container>
              <Date>
                {
                  item.date
                  ? item.date.toLocaleDateString()
                  : '-'
                }
              </Date>
              <Separator>|</Separator>
              <EditLink onClick={() => setReviewBracelet(item)} to={`${item.id}`}>Edit</EditLink>
            </Container>
            <Preview
              image={`/${item.images[0]}`}
              name={item.name}
              description={item.brief}
            />
          </Wrapper>
        ))
      }
      <Fab onClick={newClickHandler} />
    </Layout>
  );
}

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

const mapStateToProps = ({ content: { bracelets: { data, page }}}) => ({
  page,
  bracelets: data
});

const mapDispatchToProps = dispatch => ({
  loadBracelets: page => dispatch(loadBracelets(page)),
  setReviewBracelets: item => dispatch(setReviewBracelet(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogBracelets);
