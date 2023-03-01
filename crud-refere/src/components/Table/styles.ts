import styled from "styled-components"
import IconButton from '@mui/material/IconButton';

export const SectionStyled = styled.section`
  width: 100%;
  text-align: center;
  padding: 30px 0;
`;

export const TableStyled = styled.table`
  width: 80%;
  margin: 0 auto;
`;

export const TheadStyled = styled.thead`
  font-weight: bold;
  background: #998b82;
  color: #000;
`;

export const RowStyled = styled.tr`
  text-align: left;
  &:nth-child(even){
    background-color: #e9e9e9 ;
    padding: 30px 0;
  }
`;

export const CellStyled = styled.td`
  padding: 5px 10px;
`;

export const ButtonsCelStyled = styled.td`
  width: 100px;
  text-align: center;
`;

export const ButtonsTitleCelStyled = styled.th`
  width: 50px;
`

export const IconButtonSaveStyled = styled(IconButton)`
  &:hover{
    color: #0f4571;
  }
`

export const IconButtonDeleteStyled = styled(IconButton)`
  &:hover{
    color: #db1414;
  }
`