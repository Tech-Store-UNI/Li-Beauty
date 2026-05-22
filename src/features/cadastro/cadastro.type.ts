
export interface CadastroRequest {
  nome: string;
  email: string;
  senha: string;
}

export interface CadastroResponse {
  erro: boolean;
  mensagem: string;
}