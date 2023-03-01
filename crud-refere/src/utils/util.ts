export function calculateBirthDate(birthDate: string){ 
  const dataAtual = new Date();
  const year = dataAtual.getFullYear()
  const birthyear = new Date(birthDate).getFullYear()
  return year - birthyear
}

export function maskCpf(cpf: string) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4");
}

export function maskPlate(plate: string) {
  return plate.replace(/(\w{3})(\w{3})$/g,"$1-$2");
}