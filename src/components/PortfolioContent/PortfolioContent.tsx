import { Box, Typography } from "@mui/material";

export const PortfolioContent = () => {
  return (
    <Box sx={{ padding: "40px" }}>
      
      {/* TÍTULO */}
      <Typography variant="h4">
        <Box
          component="span"
          sx={{
            color: "#e57373",
            fontWeight: "normal",
            textTransform: "uppercase"
          }}
        >
          LI BEAUTY
        </Box>{" "}
        - Transformando Beleza em Arte
      </Typography>

      {/* TEXTO EM 5 LINHAS */}
      <Typography sx={{ mt: 2, textAlign: "justify", maxWidth: "600px" }}>
        Cada trabalho realizado representa mais do que uma mudança estética. <br />
        É uma verdadeira transformação de beleza, autoestima e confiança. <br />
        No nosso portfólio, você encontra resultados que valorizam a essência de cada cliente,
        respeitando seus traços e destacando o que há de mais bonito
        de forma natural e harmoniosa.
      </Typography>

    </Box>
  );
};