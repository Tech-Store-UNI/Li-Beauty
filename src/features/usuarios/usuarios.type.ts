
export interface Usuario {
  id: number;
  Nome: string;
  Email: string;
  Telefone: string | null;
  DtCad?: string | null;
  Perfil?: string;
  Ativo?: number;
  avatar_url?: string | null;
}

export interface UsuariosResponse {
  erro: boolean;
  total: number;
  usuarios: Usuario[];
}
