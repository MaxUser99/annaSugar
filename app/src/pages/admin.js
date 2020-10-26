import React from 'react';
import { Router, Redirect } from '@reach/router';
import styled from 'styled-components';
import Login from '../components/admin/login';
import PrivateRoute from '../components/PrivateRoute/privateRoute';
import Articles from '../components/admin/articles';
import Reviews from '../components/admin/reviews';
import CatalogBeads from '../components/admin/catalogBeads';
import CatalogBracelets from '../components/admin/catalogBracelets';
import CatalogKindles from '../components/admin/catalogKindles';
import CatalogOthers from '../components/admin/catalogOthers';
import ConsultAstro from '../components/admin/consultAstro';
import ConsultRituals from '../components/admin/consultRithuals';
import ConsultRunes from '../components/admin/consultRunes';
import ConsultTaro from '../components/admin/consultTaro';
import FaqAstro from '../components/admin/faqAstro';
import FaqBars from '../components/admin/faqBars';
import FaqBeads from '../components/admin/faqBeads';
import FaqBracelets from '../components/admin/faqBracelets';

const Admin = () => (
  <StyledRouter basepath='/admin'>
    <Login path='/login' />
    <PrivateRoute path='/catalog/beads' component={CatalogBeads} />
    <PrivateRoute path='/catalog/bracelets' component={CatalogBracelets} />
    <PrivateRoute path='/catalog/kindles' component={CatalogKindles} />
    <PrivateRoute path='/catalog/others' component={CatalogOthers} />
    <PrivateRoute path='/consult/astro' component={ConsultAstro} />
    <PrivateRoute path='/consult/ritual' component={ConsultRituals} />
    <PrivateRoute path='/consult/rune' component={ConsultRunes} />
    <PrivateRoute path='/consult/taro' component={ConsultTaro} />
    <PrivateRoute path='/faq/astro' component={FaqAstro} />
    <PrivateRoute path='/faq/bars' component={FaqBars} />
    <PrivateRoute path='/faq/beads' component={FaqBeads} />
    <PrivateRoute path='/faq/bracelets' component={FaqBracelets} />
    <PrivateRoute path='/articles' component={Articles} />
    <PrivateRoute path='/reviews' component={Reviews} />
    <Redirect to='articles' default noThrow />
  </StyledRouter>
);

const StyledRouter = styled(Router)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.beige};
`;

export default Admin;
