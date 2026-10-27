// src/pages/Clientes/Clientes.tsx (ou o caminho do seu arquivo)
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { MuiTableContainer } from "../../../components/Table/MuiTable";
import { containerTablecomunStyles, scrollResponse } from "../../../styles/StylesComun.style";
import theme from "../../../theme";
import { useAppSelector, useAppDispatch } from "../../../app/store";
import { selectTodosUsuarios } from "../../../features/usuarios/usuarios.selectors";
import { DADOS_EXIBICAO_USUARIOS } from "./util/types";
import { buscarTodosUsuarios } from "../../../features/usuarios/usuarios.thunks";
import type { TableRow } from "../../../components/Table/types";
import { DrawerUsuarios, type FormularioUsuario } from "./DrawerUsuarios/DrawerUsuarios";


type UsuarioTabela = {
  id: number;
  nome: string;
  email: string;
};

export const Clientes = () => {
  const dispatch = useAppDispatch();
  const usuarios = useAppSelector(selectTodosUsuarios);
  const [drawerAberto, setDrawerAberto] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<UsuarioTabela | null>(null);

  const [formulario, setFormulario] = useState<FormularioUsuario>({
    nome: "",
    email: "",
    foto: null,
  });

  useEffect(() => {
    dispatch(buscarTodosUsuarios());
  }, [dispatch]);

  const handleVerDetalhes = (row: TableRow) => {
    setUsuarioSelecionado({
      id: row.id as number,
      nome: String(row.nome ?? ""),
      email: String(row.email ?? ""),
    });

    setFormulario({
      nome: String(row.nome ?? ""),
      email: String(row.email ?? ""),
      foto: null,
    });

    setDrawerAberto(true);
  };

  const handleNovoUsuario = () => {
    setUsuarioSelecionado(null);
    setFormulario({
      nome: "",
      email: "",
      foto: null,
    });
    setDrawerAberto(true);
  };

  const handleFecharDrawer = () => {
    setDrawerAberto(false);
    setUsuarioSelecionado(null);
  };

  const handleChange = (campo: keyof FormularioUsuario, valor: any) => {
    setFormulario((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const handleSalvar = () => {
    if (!formulario.nome.trim() || !formulario.email.trim()) {
      return;
    }

    if (usuarioSelecionado) {
      console.log("Editar usuário:", {
        id: usuarioSelecionado.id,
        ...formulario,
      });
    } else {
      console.log("Criar usuário:", formulario);
    }
    handleFecharDrawer();
  };

  const actions = [
    {
      icon: (
        <Typography component="span" sx={{ fontSize: 14, fontWeight: 500, color: "primary.contrastText", cursor: "pointer", p: 0.5 }}>
          Detalhes
        </Typography>
      ),
      onClick: (row: UsuarioTabela) => handleVerDetalhes(row),
    },
  ];

  const rowsTabela: UsuarioTabela[] = usuarios.map((u) => ({
    id: u.id,
    nome: u.Nome,
    email: u.Email,
  }));

  const modoEdicao = usuarioSelecionado !== null;

  return (
    <Box sx={{ ...containerTablecomunStyles }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4, gap: 2 }}>
        <PeopleAltIcon sx={{ fontSize: { xs: 34, sm: 70 }, color: "secondary.main" }} />

        <Box sx={{ display: "flex", alignItems: { xs: "flex-start", sm: "center" }, justifyContent: "space-between", flex: 1, gap: 2, flexWrap: "wrap" }}>
          <Box sx={{ flex: 1, minWidth: 200 }}>
            <Typography sx={{ fontSize: { xs: 22, sm: 25 }, fontWeight: 800 }}>
              Gerenciamento de usuários
            </Typography>
            <Typography sx={{ fontSize: 11, color: "#6C6C6C" }}>
              Controle de acessos, perfis de usuários e histórico de agendamentos.
            </Typography>
          </Box>

          <Button size="large" variant="contained" startIcon={<PersonAddAlt1Icon />} onClick={handleNovoUsuario}>
            Novo usuário
          </Button>
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
      <DrawerUsuarios
        open={drawerAberto}
        modoEdicao={modoEdicao}
        formulario={formulario}
        onClose={handleFecharDrawer}
        onChange={handleChange}
        onSalvar={handleSalvar}
      />
    </Box>
  );
};