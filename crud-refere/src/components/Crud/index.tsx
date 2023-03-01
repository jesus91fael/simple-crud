import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "react-datepicker/dist/react-datepicker.css";
import {
  BoxButtonStyled,
  ErrorMessageStyled,
  FormStyled,
  InputBirthDateStyled,
  InputCpfStyled,
  InputGenderStyled,
  InputNameStyled,
  InputPlateStyled,
  InputVehiculeStyled,
  InputyearStyled,
  ItemFormStyled,
  LabelStyled,
  SectionStyled,
} from "./styles";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useForm } from "react-hook-form";
import { AddClient, api } from "../../lib/axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validate";
import { FormValues } from "./interface";

function Crud() {
  const [startDate, setStartDate] = useState();
  const [selectVehicle, setSelectVehicle] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    api.get("vehicules").then((response: any) => {
      setVehicles(response.data);
    });

    api.get("years").then((response: any) => {
      setYears(response.data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (e: any) => {
    const values = {
      name: e.name,
      birthDate: startDate,
      cpf: e.cpf,
      gender: e.gender,
      vehicle: e.vehicle,
      plate: e.plate,
      manufactureYear: e.manufactureYear,
    };
    AddClient(values);
    window.location.reload();
  };

  const handleChangeVehicle = (event: SelectChangeEvent) => {
    setSelectVehicle(event.target.value);
  };

  const handleChangeYear = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };

  return (
    <SectionStyled>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <ItemFormStyled>
          <LabelStyled htmlFor="name">Nome:</LabelStyled>
          <InputNameStyled
            id="name"
            placeholder=""
            variant="outlined"
            {...register("name")}
          />
          {errors?.name && (
            <ErrorMessageStyled>{errors.name.message}</ErrorMessageStyled>
          )}
        </ItemFormStyled>
        <ItemFormStyled>
          <LabelStyled htmlFor="birthDate">Data de Nascimento:</LabelStyled>
          <InputBirthDateStyled
            dateFormat="dd/MM/yyyy"
            showTimeSelect
            id="birthDate"
            selected={startDate}
            {...register("birthDate")}
            onChange={(date: any) => setStartDate(date)}
          />
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
              labelId="demo-select-small"
              id="demo-select-small"
              value={gender}
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
              value={selectVehicle}
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
              value={year}
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
          <Button variant="text" type="reset">
            Limpar
          </Button>
          <Button variant="contained" type="submit">
            Salvar
          </Button>
        </BoxButtonStyled>
      </FormStyled>
    </SectionStyled>
  );
}

export default Crud;
