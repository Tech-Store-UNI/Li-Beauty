import { Box, Typography, Container } from "@mui/material";
import fundoStudio from "../../../../img/FundoExperiacia.png";
import fotoStudio from "../../../../img/ExperienciaStd.png";
import { getGradient } from "../../../../util/gradients";
import { textGradient } from "../../../../styles/StylesComun.style";

export const ExperienciaStudio = () => {
  return (
    <Box component="section" sx={{ width: "100%", backgroundImage: `url(${fundoStudio})`, backgroundSize: "cover", backgroundPosition: "center", py: { xs: 8, md: 12 }, color: "white", }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, alignItems: "center", gap: { xs: 6, md: 7 }, }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 40, fontWeight: 700, textTransform: "uppercase", background: getGradient("texto-banner"), ...textGradient, }}>
              Experiência no Studio
            </Typography>

            <Typography variant="body2" sx={{ lineHeight: 1.8, textAlign: "justify", fontSize: "1rem", opacity: 0.9, }}>
              Na Li Beauty, cada detalhe foi pensado para que você tenha um momento
              especial de cuidado e bem estar. Desde o primeiro contato até o final do
              atendimento, a prioridade é oferecer uma experiência acolhedora, tranquila
              e personalizada. Aqui você encontra um ambiente preparado para que se
              sinta confortável, segura e confiante enquanto cuidamos da sua beleza com
              técnica e dedicação. Mais do que um procedimento estético, queremos que
              cada cliente saia daqui se sentindo ainda mais linda, confiante e valorizada.
            </Typography>
          </Box>

          <Box sx={{ flex: 1, position: "relative", display: "flex", justifyContent: "center", alignItems: "center", }}>
            <Box
              component="img"
              src={fotoStudio}
              alt="Nosso Studio"
              sx={{
                width: "100%",
                position: "relative",
                zIndex: 2,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};