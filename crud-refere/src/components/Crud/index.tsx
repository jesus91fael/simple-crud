import React, { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "react-datepicker/dist/react-datepicker.css";
import {
  BoxButtonStyled,
  FormStyled,
  InputBirthDateStyled,
  InputCpfStyled,
  InputGenderStyled,
  InputManufactureYearStyled,
  InputNameStyled,
  InputPlateStyled,
  InputVehicleStyled,
  ItemFormStyled,
  LabelStyled,
  SectionStyled,
} from "./styles";
import { SelectChangeEvent } from "@mui/material/Select";


function Crud() {

  const [startDate, setStartDate] = useState(new Date());
  const [age, setAge] = useState("");

 

  

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <SectionStyled>
      <FormStyled action="">
        <ItemFormStyled>
          <LabelStyled htmlFor="name">Nome:</LabelStyled>
          <InputNameStyled
            size="small"
            id="name"
            placeholder=""
            variant="outlined"
          />
        </ItemFormStyled>
        <ItemFormStyled>
          <LabelStyled htmlFor="birth-date">Data de Nascimento:</LabelStyled>
          <InputBirthDateStyled
            dateFormat="dd/MM/yyyy"
            id="birth-date"
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
          />
        </ItemFormStyled>
        <ItemFormStyled>
          <LabelStyled htmlFor="cpf">CPF:</LabelStyled>
          <InputCpfStyled
          size="small"
            id="cpf"
            placeholder=""
            variant="outlined"
          />
        </ItemFormStyled>
        <ItemFormStyled>
          <LabelStyled htmlFor="gender">Gênero:</LabelStyled>
          <InputGenderStyled
            id="gender"
            value={age}
            onChange={() => handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </InputGenderStyled>
        </ItemFormStyled>
        <ItemFormStyled>
          <LabelStyled htmlFor="vehicle">Veículo:</LabelStyled>
          <InputVehicleStyled
            id="vehicle"
            value={age}
            onChange={() => handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </InputVehicleStyled>
        </ItemFormStyled>
        <ItemFormStyled>
          <LabelStyled htmlFor="plate">Placa:</LabelStyled>
          <InputPlateStyled
          size="small"
            id="plate"
            placeholder=""
            variant="outlined"
          />
        </ItemFormStyled>
        <ItemFormStyled>
          <LabelStyled htmlFor="manufacture-year">Ano Modelo:</LabelStyled>

          <InputManufactureYearStyled
            id="manufacture-year"
            value={age}
            onChange={() => handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </InputManufactureYearStyled>
        </ItemFormStyled>
        <BoxButtonStyled className="button-position">
          <Button variant="contained">Salvar</Button>
        </BoxButtonStyled>
      </FormStyled>
    </SectionStyled>
  );
}

export default Crud;
