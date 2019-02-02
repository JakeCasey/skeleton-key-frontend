import styled from 'styled-components';

const Table = styled.table`
  border-spacing: 0;
  width: 100%;
  box-shadow: ${props => props.theme.bs};
  border-radius: ${props => props.theme.borders};
  /* border: 1px solid ${props => props.theme.offWhite}; */
  thead {
    color: #8D8D8D;
    font-size: 10px;
    background-color: #F1F1F1;
  }
  td,
  th {
    padding: 12px;
    border-bottom: 1px solid ${props => props.theme.offWhite};
    /* border-right: 1px solid ${props => props.theme.offWhite}; */
    position: relative;
    &:last-child {
      border-right: none;
      width: 150px;
      button {
        width: 100%;
      }
    }
    label {
      padding: 10px 5px;
      display: block;
    }
  }
  tr {
  }
`;

export default Table;
