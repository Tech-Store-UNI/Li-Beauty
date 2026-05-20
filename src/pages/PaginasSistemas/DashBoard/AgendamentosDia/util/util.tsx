import { Avatar } from "@mui/material";

export const DADOS_EXIBICAO_AGENDAMENTOS = [
  {
    key: "foto",
    label: "Foto",
    render: (row: any) => (
      <Avatar
        src={row.foto}
        sx={{
          width: 40,
          height: 40,
          border: "2px solid #f2a7a7",
        }}
      />
    ),
  },
  { key: "nome", label: "Nome" },
  { key: "telefone", label: "Telefone" },
  { key: "categoria", label: "Categoria" },
  { key: "servico", label: "Serviço" },
  { key: "valor", label: "Valor" },
  { key: "tipopagamento", label: "Pagamento" },
  { key: "data", label: "Data" },
  { key: "hora", label: "Hora" },
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