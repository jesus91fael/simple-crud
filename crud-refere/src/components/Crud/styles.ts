import styled from "styled-components"
import DatePicker from "react-datepicker";
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import InputMask from "react-input-mask";

export const SectionStyled = styled.section`
  width: 100%;  
  margin: 0 auto;
  border-bottom: 1px solid #afc7b9;
  padding: 10px 0;
`

export const FormStyled = styled.form`
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  @media (max-width: 435px) {
    flex-direction: column;
  }
`

export const ItemFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 20px;
  flex-basis: 33,33%;

  @media (max-width: 550px) {
    padding: 20px 0x;
    width: 100%;
  }
`

export const LabelStyled = styled.label`
  text-align: left;
  font-size: 14px;
  width: 100%; 
`

export const InputNameStyled = styled(TextField)`
  width: 400px;
  @media (max-width: 550px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const ErrorMessageStyled = styled.span`
  color: red;
  font-size: 10px;
  margin: 2px 0 ;
`

export const InputBirthDateStyled = styled(DatePicker)`
  width: 150px;
  height: 56px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid rgba(153,139,130,.5);

  &:focus{
  border: 2px solid blue;
  }

  @media (max-width: 550px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const InputCpfStyled = styled(InputMask)`
  width: 150px;
  height: 56px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid rgba(153,139,130,.5);
  font-size:18px;
  &:focus{
  border: 2px solid blue;
  }

  @media (max-width: 550px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const InputGenderStyled = styled(FormControl)`
  width: 100px;
  @media (max-width: 550px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const InputVehiculeStyled = styled(FormControl)`
  width: 200px;
  @media (max-width: 550px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const InputyearStyled = styled(FormControl)`
  width: 100px;
  @media (max-width: 550px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const InputPlateStyled = styled(TextField)`
  width: 200px;
  @media (max-width: 550px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const BoxButtonStyled = styled.div`
  padding: 20px 40px;
  text-align: right;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
