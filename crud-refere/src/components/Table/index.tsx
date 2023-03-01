import React, { useEffect, useState } from "react";
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import { api } from "../../lib/axios";
import { calculateBirthDate, maskCpf, maskPlate } from "../../utils/util";

function Table() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    api.get("dados").then((response: any) => {
      setDados(response.data)
    })
  }, [])

  const getData = () => {
    api.get("dados").then((response: any) => {
      setDados(response.data)
    })
}

  const deleteDado = (id: number) => {
    api.delete(`dados/${id}`)
    .then(() => {
      getData();
  })
  };

  const editClient = (id: string) =>{
    localStorage.setItem('client-crud', id)
    window.location.reload();
  }

  return (
    <SectionStyled>
      <TableStyled>
        <TheadStyled>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>CPF</th>
          <th>Placa do Veículo</th>
          <ButtonsTitleCelStyled>Editar</ButtonsTitleCelStyled>
          </tr>
        </TheadStyled>
        <tbody>
          {dados.map((element: any, index: number) => {
            return (
              <RowStyled key={index}>
                <CellStyled>{element.name}</CellStyled>
                <CellStyled>{calculateBirthDate(element.birthDate)}</CellStyled>
                <CellStyled>{maskCpf(element.cpf)}</CellStyled>
                <CellStyled>{maskPlate(element.plate)}</CellStyled>
                <ButtonsCelStyled>
                  <IconButtonSaveStyled aria-label="delete" onClick={() => editClient(element.id)}>
                    <EditIcon  />
                  </IconButtonSaveStyled>
                  <IconButtonDeleteStyled aria-label="delete" onClick={() => deleteDado(element.id)}>
                    <DeleteIcon />
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
