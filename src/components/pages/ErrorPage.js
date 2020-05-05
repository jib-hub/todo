import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../containers/Wrapper'
import PrimaryButton from '../common/PrimaryButton';
import Heading2 from '../common/Heading2';

const BackButton = styled(PrimaryButton).attrs({
  color: 'primary'
})`
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
`;
const HeadingError = styled(Heading2)`
  text-align: center;
  margin: 30px auto;
  font-size: 3rem;
`;
class Error extends React.Component {
    render(){
      return (
      <>
      <Wrapper width="boxed">
      <HeadingError>ERROR 404</HeadingError>
      </Wrapper>
      <Wrapper width="boxed">
      <Link to ={{ pathname: "/" }} ><BackButton>Back to Start</BackButton></Link>
      </Wrapper>
      </>
      )
    }
};


export default Error;
