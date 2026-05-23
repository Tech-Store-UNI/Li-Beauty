import { Box, Button, Typography } from "@mui/material";
import { MuiTableContainer } from "../../../components/Table/MuiTable";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { containerTablecomunStyles, scrollResponse } from "../../../styles/StylesComun.style";
import theme from "../../../theme";
import { useAppSelector, useAppDispatch } from "../../../app/store";
import { selectTodosUsuarios } from "../../../features/usuarios/usuarios.selectors";
import { DADOS_EXIBICAO_USUARIOS } from "./util/types";
import { useEffect } from "react";
import { buscarTodosUsuarios } from "../../../features/usuarios/usuarios.thunks";

export const Clientes = () => {
  const dispatch = useAppDispatch();
  const usuarios = useAppSelector(selectTodosUsuarios);

  useEffect(() => {
    dispatch(buscarTodosUsuarios());
  }, [dispatch]);

  const handleVerDetalhes = (row: any) => {
    console.log("Ver detalhes de:", row.nome);
  };

  const actions = [
    {
      icon: (
        <Button sx={{ fontSize: 14, fontWeight: 500, color: "background.default", p: 0.5 }}>
          Detalhes
        </Button>
      ),
      onClick: (row: any) => handleVerDetalhes(row),
    },
  ];

  const rowsTabela = usuarios.map(u => ({
    id: u.id,
    nome: u.Nome,
    email: u.Email,
  }));

  return (
    <Box sx={{ ...containerTablecomunStyles }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4, gap: 2 }}>
        <PeopleAltIcon sx={{ fontSize: { xs: 34, sm: 70 }, color: "secondary.main" }} />
        <Box>
          <Typography sx={{ fontSize: { xs: 22, sm: 25 }, fontWeight: 800 }}>
            Gerenciamento de usuários
          </Typography>
          <Typography sx={{ fontSize: 11, color: "#6C6C6C" }}>
            Controle de acessos, perfis de usuários e histórico de agendamentos.
          </Typography>
        </Box>
      </Box>

      <MuiTableContainer
        columns={DADOS_EXIBICAO_USUARIOS}
        rows={rowsTabela}
        onRowClick={handleVerDetalhes}
        lastColumn="Detalhes"
        actions={actions}
        LastColumnSx={{ textAlign: "end" }}
        tableHeadSx={{ minWidth: 0, width: 100 }}
        tableIConSx={{ justifyContent: "end" }}
        containerSx={{ ...scrollResponse(theme) }}
      />
    </Box>
  );
};