import { Avatar, Tooltip, Typography } from "@mui/material";

export const DADOS_EXIBICAO_AGENDAMENTOS = [
  {
    key: "foto",
    label: "Foto",
    width: 50,
    render: (row: any) => (
      <Avatar
        src={row.foto}
        sx={{
          width: 35,
          height: 35,
          border: "2px solid #f2a7a7",
        }}
      />
    ),
  },
  {
    key: "nome",
    label: "Nome",
    width: 90,
    render: (row: any) => (
      <Tooltip title={row.nome} arrow>
        <Typography sx={{ maxWidth: 90, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: 13, }}>
          {row.nome}
        </Typography>
      </Tooltip>
    ),
  },
  { key: "telefone", label: "Telefone", width: 30, },
  { key: "categoria", label: "Categoria", width: 50, },
  { key: "servico", label: "Serviço", width: 50, },
  { key: "valor", label: "Valor", width: 50, },
  { key: "tipopagamento", label: "Pagamento", width: 50, },
  { key: "data", label: "Data", width: 50, },
  { key: "hora", label: "Hora", width: 50, },
];

export const rowsAppointments = [
  {
    id: 1,
    foto: "https://i.pravatar.cc/150?u=1",
    nome: "Cristiane Lima",
    telefone: "(11) 94498-2012",
    categoria: "Cílios",
    servico: "Clássico",
    valor: "R$ 150,00",
    tipopagamento: "PIX",
    data: "27/04/2026",
    hora: "16:00",
  },
  {
    id: 2,
    foto: "https://i.pravatar.cc/150?u=2",
    nome: "Mariana Silva",
    telefone: "(11) 97777-6666",
    categoria: "Cílios",
    servico: "Volume Russo",
    valor: "R$ 220,00",
    tipopagamento: "Débito",
    data: "27/04/2026",
    hora: "17:30",
  },
];