import React from "react";
import {
  ButtonsCelStyled,
  ButtonsTitleCelStyled,
  CellStyled,
  IconButtonDeleteStyled,
  IconButtonSaveStyled,
  RowStyled,
  SectionStyled,
  TableStyled,
  TheadStyled,
} from "./styles";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { TableProps } from "./interface";

function Table({ dados, onChange, onDelete }: TableProps) {
  console.log("aqui", dados);

  return (
    <SectionStyled>
      <TableStyled>
        <TheadStyled>
          <th>Nome</th>
          <th>Idade</th>
          <th>CPF</th>
          <th>Placa do Veículo</th>
          <ButtonsTitleCelStyled>Editar</ButtonsTitleCelStyled>
        </TheadStyled>
        <tbody>
          {dados.map((element: any) => {
            return (
              <RowStyled key={element.id}>
                <CellStyled>{element.name}</CellStyled>
                <CellStyled>{element.birthDate}</CellStyled>
                <CellStyled>{element.cpf}</CellStyled>
                <CellStyled>{element.plate}</CellStyled>
                <ButtonsCelStyled>
                  <IconButtonSaveStyled aria-label="delete">
                    <SaveIcon />
                  </IconButtonSaveStyled>
                  <IconButtonDeleteStyled aria-label="delete">
                    <DeleteIcon onClick={onDelete(id)}/>
                  </IconButtonDeleteStyled>
                </ButtonsCelStyled>
              </RowStyled>
            );
          })}
        </tbody>
      </TableStyled>
    </SectionStyled>
  );
}

export default Table;
