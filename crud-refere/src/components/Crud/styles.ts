import styled from "styled-components"
import DatePicker from "react-datepicker";
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

export const SectionStyled = styled.section`
  width: 100%;  
  margin: 0 auto;
  border-bottom: 1px solid #afc7b9;
  padding: 10px 0;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 435px) {
    flex-direction: column;
    width: 100%;
    margin: 0 auto;

  }
`;

export const ItemFormStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (max-width: 435px) {
    padding: 20px 0x;
    width: 100%;
  }
`;

export const LabelStyled = styled.label`
  text-align: right;
  margin: 0 20px; 
  font-size: 14px;
  width: 80px; 
  
  @media (max-width: 600px) {
    text-align: left;
    margin-left: 10%;
    width: 150px; 
  }
`;

export const InputNameStyled = styled(TextField)`
  width: 400px;
  @media (max-width: 435px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const InputBirthDateStyled = styled(DatePicker)`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid rgba(153,139,130,.5);

  &:focus{
  border: 2px solid blue;
  }

  @media (max-width: 435px) {
    width: 80%;
    margin: 0 auto;
    margin-left: 10%;
  }
`;

export const InputCpfStyled = styled(TextField)`
  width: 200px;
  @media (max-width: 435px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const InputGenderStyled = styled(Select)`
  width: 90px;
  border-radius: 5px;

  @media (max-width: 435px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const InputVehicleStyled = styled(Select)`
  width: 400px;
  border-radius: 5px;

  @media (max-width: 435px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const InputPlateStyled = styled(TextField)`
  width: 100px;

  @media (max-width: 435px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const InputManufactureYearStyled = styled(Select)`
  width: 100px;
  border-radius: 10px;

  @media (max-width: 435px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const BoxButtonStyled = styled.div`
  padding: 20px 40px;
  text-align: right;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
