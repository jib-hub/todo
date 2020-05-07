import React from 'react';
import styled from 'styled-components';

const CatListItemContainer = styled.div`
  padding: 5px 5px 0 5px;
`;
const CatListItem = styled.div`
  padding-bottom: 5px;
  cursor: pointer;
`;

export default class CatInputAutocompleteContent extends React.Component {

  render(props) {
    if(Object.keys(this.props.data).length !== 0) {
      const cats = this.props.data;
      for( var i = 0; i < cats.length; i++){ if ( cats[i] === false) { cats.splice(i, 1); }}
      const catItems = cats.map((cat) =>    <CatListItem onClick={() => this.props.handleAutoCompleteClick(cat)}>{cat}</CatListItem>  );
      return (
        <CatListItemContainer>
        {catItems}
        </CatListItemContainer>
      )
    } else {
      return ''
    }
  }
}
