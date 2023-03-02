import React, { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import { AddClient, api, EditClient } from "../../lib/axios"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "./validate"
import { FormValues } from "./interface"
import MenuItem from "@mui/material/MenuItem"
import { Dayjs } from "dayjs"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertProps } from "@mui/material/Alert"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import "react-datepicker/dist/react-datepicker.css"
import {
  BoxButtonStyled,
  ErrorMessageStyled,
  FormStyled,
  InputCpfStyled,
  InputGenderStyled,
  InputNameStyled,
  InputPlateStyled,
  InputVehiculeStyled,
  InputyearStyled,
  ItemFormStyled,
  LabelStyled,
  SectionStyled,
} from "./styles"
import { useForm } from "react-hook-form"


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function Crud() {
  const [value, setValue] = React.useState<Dayjs | null>(null)
  const [selectVehicle, setSelectVehicle] = useState("")
  const [gender, setGender] = useState("")
  const [year, setYear] = useState("")
  const [vehicles, setVehicles] = useState([])
  const [years, setYears] = useState([])
  const [client, setClient] = useState<FormValues>()

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

  let clientId = localStorage.getItem("client-crud")

  useEffect(() => {
    api.get("vehicules").then((response: any) => {
      setVehicles(response.data)
    })
  }, [])

  useEffect(() => {
    api.get("years").then((response: any) => {
      setYears(response.data)
    })
  }, [])

  useEffect(() => {
    if (clientId) {
      api.get(`dados/${clientId}`).then((response: any) => {
        setClient(response.data)
      })
    }
  }, [clientId])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: client,
  })

  useEffect(() => {
    reset(client);
  }, [client, reset])

  const onSubmit = (e: any) => {
    const values = {
      name: e.name ? e.name : client?.name,
      birthDate: value ? value : client?.birthDate,
      cpf: e.cpf ? e.cpf : client?.cpf,
      gender: e.gender ? e.gender : client?.gender,
      vehicle: e.vehicle ? e.vehicle : client?.vehicle,
      plate: e.plate ? e.plate : client?.plate,
      manufactureYear: e.manufactureYear
        ? e.manufactureYear
        : client?.manufactureYear,
    }
    clientId ? EditClient(values, clientId) : AddClient(values);
    handleClick();
    localStorage.clear();
    window.location.reload();
  }

  const handleChangeVehicle = (event: SelectChangeEvent) => {
    setSelectVehicle(event.target.value)
  }
  const handleChangeYear = (event: SelectChangeEvent) => {
    setYear(event.target.value)
  }

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value)
  }

  const editCancel = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <SectionStyled>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Salvo com sucesso!
        </Alert>
      </Snackbar>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <ItemFormStyled>
          <LabelStyled htmlFor="name">Nome:</LabelStyled>
          <InputNameStyled id="name" variant="outlined" {...register("name")} />
          {errors?.name && (
            <ErrorMessageStyled>{errors.name.message}</ErrorMessageStyled>
          )}
        </ItemFormStyled>
        <ItemFormStyled>
          <LabelStyled htmlFor="birthDate">Data de Nascimento:</LabelStyled>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputFormat="DD/MM/YYYY"
              views={["day", "month", "year"]}
              value={client?.birthDate ? client?.birthDate : value}
              onChange={(newValue: any) => {
                setValue(newValue)
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {errors?.birthDate && (
            <ErrorMessageStyled>{errors.birthDate.message}</ErrorMessageStyled>
          )}
        </ItemFormStyled>
        <ItemFormStyled>
          <LabelStyled htmlFor="cpf">CPF:</LabelStyled>
          <InputCpfStyled
            id="cpf"
            placeholder=""
            variant="outlined"
            {...register("cpf")}
          />
          {errors?.cpf && (
            <ErrorMessageStyled>{errors.cpf.message}</ErrorMessageStyled>
          )}
        </ItemFormStyled>
        <ItemFormStyled>
          <LabelStyled htmlFor="gender">Gênero:</LabelStyled>
          <InputGenderStyled>
            <Select
              id="gender"
              value={client?.gender ? client?.gender : gender}
              {...register("gender")}
              onChange={handleChangeGender}
            >
              <MenuItem value="F">F</MenuItem>
              <MenuItem value="M">M</MenuItem>
            </Select>
          </InputGenderStyled>
          {errors?.gender && (
            <ErrorMessageStyled>{errors.gender.message}</ErrorMessageStyled>
          )}
        </ItemFormStyled>
        <ItemFormStyled>
          <LabelStyled htmlFor="vehicle">Veículo:</LabelStyled>
          <InputVehiculeStyled>
            <Select
              id="vehicle"
              value={client?.vehicle ? client?.vehicle : selectVehicle}
              {...register("vehicle")}
              onChange={handleChangeVehicle}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {vehicles &&
                vehicles.map((element: any, index: number) => {
                  return (
                    <MenuItem key={index} value={element}>
                      {element}
                    </MenuItem>
                  );
                })}
            </Select>
          </InputVehiculeStyled>
          {errors?.vehicle && (
            <ErrorMessageStyled>{errors.vehicle.message}</ErrorMessageStyled>
          )}
        </ItemFormStyled>
        <ItemFormStyled>
          <LabelStyled htmlFor="plate">Placa:</LabelStyled>
          <InputPlateStyled
            id="plate"
            placeholder=""
            variant="outlined"
            {...register("plate")}
          />
          {errors?.plate && (
            <ErrorMessageStyled>{errors.plate.message}</ErrorMessageStyled>
          )}
        </ItemFormStyled>

        <ItemFormStyled>
          <LabelStyled htmlFor="manufactureYear">Ano Modelo:</LabelStyled>

          <InputyearStyled>
            <Select
              id="manufactureYear"
              value={client?.manufactureYear ? client?.manufactureYear : year}
              {...register("manufactureYear")}
              onChange={handleChangeYear}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {years &&
                years.map((element: any, index: number) => {
                  return (
                    <MenuItem key={index} value={element}>
                      {element}
                    </MenuItem>
                  );
                })}
            </Select>
          </InputyearStyled>
          {errors?.manufactureYear && (
            <ErrorMessageStyled>
              {errors.manufactureYear.message}
            </ErrorMessageStyled>
          )}
        </ItemFormStyled>
        <BoxButtonStyled className="button-position">
          <Button variant="text" type="reset" onClick={editCancel}>
            Cancelar
          </Button>
          <Button variant="contained" type="submit">
            Salvar
          </Button>
        </BoxButtonStyled>
      </FormStyled>
    </SectionStyled>
  )
}

export default Crud
