import { Box, Button, Typography } from "@mui/material";
import { MuiTableContainer } from "../../../components/Table/MuiTable";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { containerTablecomunStyles, scrollResponse } from "../../../styles/StylesComun.style";
import theme from "../../../theme";
import { DADOS_EXIBICAO_USUARIOS, rowsComTempoEmpresa } from "./util/types";



export const Clientes = () => {
  const handleVerDetalhes = (row: any) => {
    console.log("Ver detalhes de:", row.nome);
  };

  const actions = [
    {
      icon: (
        <Button sx={{ fontSize: 14, fontWeight: 500, color: "background.default", p: .5 }}>
          Detalhes
        </Button>
      ),
      onClick: (row: any) => handleVerDetalhes(row),
    },
  ];

  return (
    <Box sx={{ ...containerTablecomunStyles }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4, gap: 2 }}>
        <PeopleAltIcon  sx={{ fontSize: { xs: 34, sm: 70 }, color: "secondary.main"}} />
        <Box >
          <Typography sx={{ fontSize: { xs: 22, sm: 25 }, fontWeight: 800 }}>Gerenciamento de usuários</Typography>
          <Typography sx={{ fontSize: 11, color: "#6C6C6C" }}>Controle de acessos, perfis de usuários e histórico de agendamentos.</Typography>
        </Box>

      </Box>
      <MuiTableContainer
        columns={DADOS_EXIBICAO_USUARIOS}
        rows={rowsComTempoEmpresa}
        onRowClick={handleVerDetalhes}
        lastColumn="Detalhes"
        actions={actions}
        LastColumnSx={{ textAlign: "end", }}
        tableHeadSx={{ minWidth: 0, width: 100 }}
        tableIConSx={{ justifyContent: "end" }}
        containerSx={{ ...scrollResponse(theme), }}
      />
    </Box>
  );
};