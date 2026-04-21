import { Box, Typography, Container } from "@mui/material";
import fundoStudio from "../../../../img/fundo-missao.png";
import fotoStudio from "../../../../img/img-missao.png";
import { getGradient } from "../../../../util/gradients";
import { textGradient } from "../../../../styles/StylesComun.style";

export const MissaoStudio = () => {
    return (
        <Box component="section" sx={{ width: "100%", backgroundImage: `url(${fundoStudio})`, backgroundSize: "cover", backgroundPosition: "center", py: { xs: 8, md: 12 }, color: "white", }}>
            <Container maxWidth="lg">
                <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, alignItems: "center", gap: { xs: 6, md: 7 }, }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontSize: 40, fontWeight: 700, textTransform: "uppercase", background: getGradient("texto-banner"), ...textGradient, }}>
                            MISSÃO DO STUDIO
                        </Typography>

                        <Typography variant="body2" sx={{ lineHeight: 1.8, textAlign: "justify", fontSize: "1rem", opacity: 0.9, }}>
                            Nossa missão é realçar a beleza natural de cada cliente, oferecendo serviços de cílios, sobrancelhas e
                            maquiagem com excelência, cuidado e profissionalismo. Buscamos proporcionar não apenas resultados estéticos
                            de qualidade, mas também elevar a autoestima e o bem-estar, criando uma experiência acolhedora,
                            personalizada e inesquecível em cada atendimento. Prezamos pela ética, qualidade, respeito e
                            dedicação. Valorizamos a transparência no atendimento, o cuidado com cada cliente e a busca
                            constante por aperfeiçoamento para oferecer sempre o melhor.
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