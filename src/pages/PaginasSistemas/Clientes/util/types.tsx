import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import type { TableColumn } from "../../../../components/Table/types";
import { URL_FOTOS } from "../../../../util/api";

export const DADOS_EXIBICAO_USUARIOS: TableColumn[] = [
  {
    label: "Foto",
    key: "avatar_url",
    render: (row: any) => {
      const fotoUrl = row.avatar_url? row.avatar_url.startsWith("http") || row.avatar_url.startsWith("data:")? row.avatar_url: `${URL_FOTOS}/${row.avatar_url.replace(/^\/+/, "")}`: "";
      return (
        <Box sx={{ display: "flex", justifyContent: "left" }}>
          <Avatar src={fotoUrl}alt={row.Nome}sx={{ width: 35, height: 35, boxShadow: "0 0 5px 1px #00000046", "& img": { objectFit: "cover" } }}>
            {row.Nome?.charAt(0).toUpperCase()}
          </Avatar>
        </Box>
      );
    },
  },
  {
    key: "Nome",
    label: "Nome",
    width: 90,
    render: (row: any) => (
      <Tooltip title={row.Nome} arrow>
        <Typography sx={{ maxWidth: 90, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: 13, }}>
          {row.Nome}
        </Typography>
      </Tooltip>
    ),
  },
  { key: "Email", label: "E-mail" },
  { key: "Telefone", label: "Telefone" },
];