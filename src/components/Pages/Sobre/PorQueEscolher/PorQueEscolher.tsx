import { Box, Typography, Container } from "@mui/material";
import { getGradient } from "../../../../util/gradients";
import { textGradient } from "../../../../styles/StylesComun.style";
import imgEscolher from "../../../../img/img-pessoa.png";
import { Buttonpadrao } from "../../../Buttonpadrao/ButtonPadrao";

export const PorQueEscolher = () => {
    return (
        <Box component="section" sx={{ width: "100%", py: { xs: 8, md: 10 }, bgcolor: "#fff" }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 6, md: 8 },
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 600,
                                mb: 4,
                                color: "text.primary",
                                textTransform: "uppercase",
                            }}
                        >
                            POR QUE ESCOLHER A{" "}
                            <Box
                                component="span"
                                sx={{
                                    background: getGradient("dark"),
                                    ...textGradient,
                                    fontWeight: 600,
                                }}
                            >
                                LI BEAUTY?
                            </Box>
                        </Typography>

                        <Box sx={{ mb: 4 }}>
                            {[
                                {
                                    bold: "Atendimento personalizado",
                                    text: "Cada cliente é única. Por isso analisamos o formato do rosto, estilo e preferências para indicar o procedimento ideal.",
                                },
                                {
                                    bold: "Técnica e profissionalismo",
                                    text: "Todos os procedimentos são realizados com técnica, cuidado e atenção aos detalhes, garantindo segurança e resultados de qualidade.",
                                },
                                {
                                    bold: "Ambiente acolhedor",
                                    text: "O studio foi criado para proporcionar conforto, tranquilidade e uma experiência agradável durante todo o atendimento.",
                                },
                                {
                                    bold: "Resultados naturais e harmoniosos",
                                    text: "O objetivo é realçar a beleza natural, mantendo sempre um resultado elegante e sofisticado.",
                                },
                            ].map((item, index) => (
                                <Typography key={index} sx={{ mb: 2, color: "text.primary", lineHeight: 1.6, fontSize: 18, textAlign: "justify" }}>
                                    <strong>{item.bold}</strong> – {item.text}
                                </Typography>
                            ))}
                        </Box>

                        <Typography variant="body1" sx={{ color: "text.primary", mb: 6, lineHeight: 1.6, fontSize: 18, textAlign: "justify" }}>
                            Sua beleza merece cuidado, técnica e atenção aos detalhes. Na Li Beauty, cada
                            atendimento é feito para realçar o melhor de você. Agende seu horário pelo WhatsApp e
                            venha viver a experiência Li Beauty.
                        </Typography>
                        <Buttonpadrao />

                    </Box>

                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "end",
                            width: "30%"
                        }}
                    >
                        <Box
                            component="img"
                            src={imgEscolher}
                            alt="Resultado Li Beauty"
                            sx={{
                                width: "100%",
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};