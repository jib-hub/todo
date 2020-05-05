import { Button } from '@material-ui/core';
import styled from 'styled-components';

const PrimaryButton = styled(Button).attrs({
  color: 'primary'
})`
  background: ${props => props.theme.bg} !important;
  color: ${props => props.theme.backgroundColorGradientEnd} !important;
  border-color: ${props => props.theme.backgroundColorGradientEnd} !important;
  padding: 4px 40px 2px 40px !important;
  font-weight: 700 !important;
  font-size: 1rem !important;
  &:hover{
    background: ${props => props.theme.bgDarken} !important;
  }
`;

export default PrimaryButton
