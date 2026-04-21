import { Box, Typography } from "@mui/material";

export const PortfolioContent = () => {
  return (
    <Box sx={{ padding: "40px" }}>
      <Typography variant="h4">
        LI BEAUTY - Transformando Beleza em Arte
      </Typography>

      <Typography>
        <Typography
  sx={{
    maxWidth: "600px",
    lineHeight: 1.6,
  }}
>
  Cada trabalho realizado representa mais do que uma mudança estética.
  É uma verdadeira transformação de beleza, autoestima e confiança.
  No nosso portfólio, você encontra resultados que valorizam a essência
  de cada cliente, respeitando seus traços e destacando o que há de mais
  bonito de forma natural e harmoniosa.
</Typography>
      </Typography>
    </Box>
  );
};