// features/login/usuarios.types.ts

export interface Usuarios {
  id: number;
  Nome: string;
  Email: string;
  Telefone: string | null;
}

export interface UsuariosResponse {
  erro: boolean;
  total: number;
  usuarios: Usuarios[];
}