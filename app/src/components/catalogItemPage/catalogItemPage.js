import React, { useEffect } from 'react';
import { useLoading } from '../../hooks/useLoading';
import Layout from '../layout/layout';
import Container from '../container/container';
import ContentWrapper from '../contentWrapper/contentWrapper';
import Breadscrumb from './components/breadscrumb';
import ItemPage from './components/itemPage';

const CatalogItemPage = ({ itemId, reviewItem, clearHandler, loadItem }) => {
  const { isLoading, shouldRedirect } = useLoading(!reviewItem, () => loadItem(itemId));

  useEffect(() => clearHandler, []);

  return (
    <Layout>
      <Container fullWidth>
        <ContentWrapper direction='column'>
          <Breadscrumb itemName={reviewItem ? reviewItem.name : '...'} />
          {
            shouldRedirect
            ? <div>should redirect</div>
            : <ItemPage item={reviewItem} isLoading={isLoading} />
          }
        </ContentWrapper>
      </Container>
    </Layout>
  );
}


export default CatalogItemPage;

