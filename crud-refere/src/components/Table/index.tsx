import React, { useEffect, useState } from "react"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { api } from "../../lib/axios"
import { calculateBirthDate, maskCpf, maskPlate } from "../../utils/util"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertProps } from "@mui/material/Alert"
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
} from "./styles"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function Table() {
  const [dados, setDados] = useState([])

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

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
    api.delete(`dados/${id}`).then(() => {
      getData()
    })
    handleClick()
  }

  const editClient = (id: string) => {
    localStorage.setItem("client-crud", id)
    window.location.reload()
  }

  return (
    <SectionStyled>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Deletado com sucesso!
        </Alert>
      </Snackbar>
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
                  <IconButtonSaveStyled
                    aria-label="delete"
                    onClick={() => editClient(element.id)}
                  >
                    <EditIcon />
                  </IconButtonSaveStyled>
                  <IconButtonDeleteStyled
                    aria-label="delete"
                    onClick={() => deleteDado(element.id)}
                  >
                    <DeleteIcon />
                  </IconButtonDeleteStyled>
                </ButtonsCelStyled>
              </RowStyled>
            );
          })}
        </tbody>
      </TableStyled>
    </SectionStyled>
  )
}

export default Table
