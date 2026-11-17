
export interface Mensagem {
  id: number;
  Nome: string;
  Email: string;
  Mensagem: string;
  Telefone?: string | null;
  DtEnv: string;
  Respondida?: boolean;
  Lida?: number;
}

export interface MensagensResponse {
  erro: boolean;
  total: number;
  mensagens: Mensagem[];
}
