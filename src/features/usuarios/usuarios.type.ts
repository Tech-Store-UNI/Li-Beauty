// features/usuarios/usuarios.types.ts
export interface Usuario {
  id: number;
  Nome: string;     
  Email: string;     
  Telefone: string | null; 
}

export interface UsuariosResponse {
  erro: boolean;
  total: number;
  usuarios: Usuario[];
}