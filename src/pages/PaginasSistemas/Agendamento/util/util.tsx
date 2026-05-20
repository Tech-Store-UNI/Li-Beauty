import { Avatar, Tooltip, Typography } from "@mui/material";
import dayjs from "dayjs";

export const COLUNAS_AGENDAMENTO = [
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
    { key: "telefone", label: "Telefone", width: 80, },
    { key: "categoria", label: "Categoria", width: 80, },
    { key: "servico", label: "Serviço", width: 80, },
    { key: "valor", label: "Valor", width: 80, },
    { key: "data", label: "Data", width: 80, render: (row: any) => dayjs(row.data).format("DD/MM/YYYY"), },
    { key: "hora", label: "Horário", width: 80, },
    { key: "pagamento", label: "Pagamento", width: 80, },
];