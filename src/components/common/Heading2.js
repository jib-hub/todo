import styled from 'styled-components';

const Heading2 = styled.h2`
  text-align: {(this.props.TextAlignCenter) ? 'center' : 'left'}
  margin: 0 auto;
`;

export default Heading2
