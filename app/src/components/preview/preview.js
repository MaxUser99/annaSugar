import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link as BrowserLink } from 'gatsby';
import Container from '../container/container';

const Preview = ({
  image,
  name,
  description,
  date,
  onNameClick,
  linkProps = {}
}) => {
  let dateString = '';
  if (date) {
    const month = date.toLocaleDateString('EN-US', { month: 'long' });
    const year = date.getFullYear();
    const dayOfMonth = date.getDate();

    let day;
    switch (dayOfMonth) {
      case 1:
        day = '1st';
        break;
      case 2:
        day = '2nd';
        break;
      case 3:
        day = '3rd';
        break;
      default:
        day = `${dayOfMonth}th`;
        break;
    }

    dateString = `${month}, ${day} ${year}`;
  }

  const {
    show,
    text,
    to,
    onClick,
  } = linkProps;

  return (
    <StyledContainer direction='column' fullWidth>
      { dateString && <Date>{dateString}</Date> }
      <Container alignItems='stretch' fullWidth>
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
        <TextContainer direction='column' fullWidth>
          <Title $clickable={!!onNameClick}>{name}</Title>
          <Text>{description}</Text>
          {
            show &&
            <Link
              onClick={onClick}
              to={to}
              children={text}
            />
          }
        </TextContainer>
      </Container>
    </StyledContainer>
  );
}


const StyledContainer = styled(Container)`
  &:not(:last-of-type) {
    margin-bottom: 32px;
  }
`;

const Date = styled.h3`
  width: 100%;
  border-bottom: 1px solid #171A1E33;
  border-radius: 1px;
  font-size: 14px;
  line-height: 28px;
  color: ${({ theme }) => theme.text.default};
  margin: 0 0 31px;
  padding-bottom: 3px;
`;

const TextContainer = styled(Container)`
  max-width: 464px;
  margin-left: 70px;
`;

const ImageWrapper = styled(Container)`
  max-width: 342px;
  width: 100%;
  height: 270px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.color.darkBeige};

`;

const Title = styled.h4`
  margin: 0 0 10px;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  font-family: "Cormorant Infant";
  color: ${({ theme }) => theme.text.header};
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'auto' )};
`;

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 28px;
`;

const Link = styled(BrowserLink)`
  padding-top: 32px;
  margin-top: auto;
  text-decoration: none;
  font-size: 14px;
  color: ${({ theme }) => theme.text.default};
`;

Preview.propTypes = {
  nameClickHandler: PropTypes.func,
  id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),  
  data: PropTypes.object,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  linkProps: PropTypes.shape({
    show: PropTypes.bool,
    text: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func
  })
}

export default Preview;
