import React from 'react';
import { Router, Redirect } from '@reach/router';
import styled from 'styled-components';
import Login from '../components/admin/login';
import PrivateRoute from '../components/PrivateRoute/privateRoute';
import Articles from '../components/admin/subpages/articles';
import Reviews from '../components/admin/subpages/reviews';
import CatalogBeads from '../components/admin/subpages/catalogBeads';
import CatalogBracelets from '../components/admin/subpages/catalogBracelets';
import CatalogKindles from '../components/admin/subpages/catalogKindles';
import CatalogOthers from '../components/admin/subpages/catalogOthers';
import ConsultAstro from '../components/admin/subpages/consultAstro';
import ConsultRituals from '../components/admin/subpages/consultRithuals';
import ConsultRunes from '../components/admin/subpages/consultRunes';
import ConsultTaro from '../components/admin/subpages/consultTaro';
import FaqAstro from '../components/admin/subpages/faqAstro';
import FaqBars from '../components/admin/subpages/faqBars';
import FaqBeads from '../components/admin/subpages/faqBeads';
import FaqBracelets from '../components/admin/subpages/faqBracelets';
import FaqForm from '../components/admin/forms/faqForm';

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
    <PrivateRoute path='/faq/bars/:id' component={FaqForm} />
    <PrivateRoute path='/faq/beads' component={FaqBeads} />
    <PrivateRoute path='/faq/bracelets' component={FaqBracelets} />
    <PrivateRoute path='/articles' component={Articles} />
    <PrivateRoute path='/articles/new' component={Articles} />
    <PrivateRoute path='/articles/:id' component={Articles} />
    <PrivateRoute path='/reviews' component={Reviews} />
    <Redirect to='articles' default noThrow />
  </StyledRouter>
);

const StyledRouter = styled(Router)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.beige};
`;

export default Admin;
