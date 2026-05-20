import { Avatar } from "@mui/material";

export const DADOS_EXIBICAO_USUARIOS = [
  {
    key: "foto",
    label: "Foto",
    render: (row: any) => (
      <Avatar src={row.foto} sx={{ width: 40, height: 40, border: '2px solid #f2a7a7' }} />
    ),
  },
  { key: "nome", label: "Nome" },
  { key: "email", label: "E-mail" },
];

export const rowsComTempoEmpresa = [
  {
    id: 1,
    foto: "https://i.pravatar.cc/150?u=1",
    nome: "Cristiane Lim..",
    email: "cris@gmail.com",

  },
  {
    id: 2,
    foto: "https://i.pravatar.cc/150?u=2",
    nome: "Cristiane Lim..",
    email: "cris@gmail.com",
  },
  {
    id: 3,
    foto: "https://i.pravatar.cc/150?u=3",
    nome: "Cristiane Lim..",
    email: "cris@gmail.com",
  },
  {
    id: 4,
    foto: "https://i.pravatar.cc/150?u=4",
    nome: "Cristiane Lim..",
    email: "cris@gmail.com",
  },
  {
    id: 5,
    foto: "https://i.pravatar.cc/150?u=5",
    nome: "Cristiane Lim..",
    email: "cris@gmail.com",
  },
];