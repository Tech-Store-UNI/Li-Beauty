export interface LoginRequest {
  usuario: string;
  senha: string;
}


export interface UsuarioLogado {
  id: number;
  Nome: string;
  Email: string;
  Foto?: string
  Perfil: string;
}


