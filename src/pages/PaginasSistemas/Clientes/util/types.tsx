import { Avatar, Tooltip, Typography } from "@mui/material";
import type { TableColumn } from "../../../../components/Table/types";

export const DADOS_EXIBICAO_USUARIOS: TableColumn[] = [
  {
    key: "foto",
    label: "Foto",
    render: (row: any) => (
      <Avatar sx={{ width: 40, height: 40, border: '2px solid #f2a7a7' }}>
        {row.nome?.charAt(0).toUpperCase()}
      </Avatar>
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
  { key: "email", label: "E-mail" },
];