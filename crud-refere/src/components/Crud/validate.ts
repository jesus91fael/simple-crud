import  *  as yup from  "yup"

export const  schema  = yup.object().shape({
  name: yup.string().required("Nome precisa ter pelo menos 3 caracteres").min(3),
  birthDate: yup.string(),
  cpf: yup.string().required("CPF precisa ter 11 caracteres").min(11).max(11),
  gender: yup.string().required("Escolha uma opção"),
  vehicle: yup.string().required("Escolha uma opção"),
  plate: yup.string().required("Placa precisa ter 7 caracteres").min(7).max(7),
  manufactureYear: yup.string().required("Escolha uma opção"),
})