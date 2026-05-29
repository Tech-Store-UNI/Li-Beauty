export interface AgendamentoRequest {
  idUsuario: number;
  dataInicio: string;
  dataFim: string;
  idAgendamentoExistente: number;
  telefone: string;
}

export interface AgendamentoResponse {
  mensagem: string;
}