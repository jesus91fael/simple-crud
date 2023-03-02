interface DadosProps{
  name: string
  birthDate: number
  cpf: string
  plate: string
}

export interface TableProps{
  onChange?: () => void
  onDelete?: (id: number) => void
  dados: Array<DadosProps>
}
