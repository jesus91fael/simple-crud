import  *  as yup from  "yup";

export const  schema  = yup.object().shape({
  name: yup.string().required("Nome precisa ter pelo menos 3 caracteres").min(3),
  birthDate: yup.string().required("É necessário inserir uma data de nascimento").min(8),
  cpf: yup.string().required("CPF precisa ter 11 caracteres").matches(/(?=.*[}{,.^?~=+\-_\/*\-+.\|])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/mg,
    "Apenas números"
  ).min(11),
  gender: yup.string().required("Escolha uma opção"),
  vehicle: yup.string().required("Escolha uma opção"),
  plate: yup.string().required("Placa precisa ter 7 caracteres").matches(/(?=.*[}{,.^?~=+\-_\/*\-+.\|])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/mg,
  "Apenas caractes"
).min(7),
  manufactureYear: yup.string().required("Escolha uma opção"),
});