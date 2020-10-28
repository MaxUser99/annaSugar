import React from 'react';
import styled from 'styled-components';

const Price = ({ className, children, remark }) => {
  const [ amount, cents ] = children
    ? children.toFixed(2).split('.')
    : ['-', ''];

  return (
    <Root className={className}>
      <Amount>{amount}</Amount>
      <Cents>.{cents} &#8381;</Cents>
      {remark && <Remark>{remark}</Remark>}
    </Root>
  );
}

const Root = styled.p``;

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

const Remark = styled.span`
  letter-spacing: normal;
`;

export default Price;
