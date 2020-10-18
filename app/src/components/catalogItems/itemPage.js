import React, { useEffect } from 'react';
import { useLoading } from '../../hooks/useLoading';
import Layout from '../layout/layout';
import Container from '../container/container';
import ContentWrapper from '../contentWrapper/contentWrapper';

const ItemPage = ({ itemId, reviewItem, clearHandler, loadItem }) => {
  const { isLoading, shouldRedirect } = useLoading(
    !reviewItem,
    () => loadItem(itemId)
  );

  useEffect(() => clearHandler, []);

  return (
    <Layout>
      <Container>
        <ContentWrapper>
          item id: { itemId }
        </ContentWrapper>
      </Container>
    </Layout>
  );
}

export default ItemPage;

