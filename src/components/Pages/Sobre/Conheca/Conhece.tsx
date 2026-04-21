import { Box, Typography, Button, Container } from "@mui/material";
import fundoTelaSobre from "../../../../img/fundo-sobre-tela.png";
import imgLocal from "../../../../img/Foto-Sobre1.png";
import { getGradient } from "../../../../util/gradients";
import { textGradient } from "../../../../styles/StylesComun.style";

export const ConheceInfos = () => {
    return (
        <Box component="section" sx={{
            width: "100%", backgroundImage: `url(${fundoTelaSobre})`, backgroundSize: "cover", backgroundPosition: "center", py: 7
        }}>
            <Container maxWidth="lg" sx={{ mt: 15 }}>
                <Box >
                    <Typography variant="h3" sx={{ fontWeight: 600, mb: 3, color: "text.primary", textTransform: "uppercase", fontFamily: 'inherit' }} >
                        CONHEÇA A{" "}
                        <Box component="span" sx={{ background: getGradient("dark"), ...textGradient, fontWeight: 600, }}>
                            LI BEAUTY
                        </Box>
                    </Typography>

                    <Typography variant="body1" sx={{ color: "text.primary", mb: 6, lineHeight: 1.8, textAlign: "justify" }}>
                        Na Li Beauty, cada cliente é recebida com atenção especial, onde o cuidado vai
                        muito além da estética. Nosso propósito é criar momentos únicos, que elevem a
                        autoestima e transmitam confiança em cada detalhe. Valorizamos a
                        individualidade, por isso cada procedimento é planejado de forma exclusiva,
                        buscando realçar a beleza de maneira leve, sofisticada e harmoniosa. Além disso,
                        prezamos por um ambiente acolhedor, seguro e profissional, onde cada pessoa
                        se sente confortável, valorizada e ainda mais bonita ao final de cada atendimento.
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "flex-start", gap: 9, }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ color: "text.primary", mb: 5, lineHeight: 1.8, textAlign: "justify" }}>
                            Cada atendimento é pensado para proporcionar mais do que um procedimento
                            estético: oferecemos uma experiência de cuidado, beleza e autoestima. Nosso
                            compromisso é entregar resultados naturais, elegantes e personalizados para
                            cada cliente.
                        </Typography>

                        <Button
                            variant="contained"
                            sx={{
                                background: getGradient("main"),
                                color: "white",
                                px: 12,
                                py: 1.2,
                                borderRadius: "15px",
                                fontWeight: "bold",
                                textTransform: "none",
                                fontSize: "1.1rem",
                                "&:hover": {
                                    opacity: 0.9,
                                },
                            }}
                        >
                            Agendamento online
                        </Button>
                    </Box>

                    <Box sx={{ flex: 1, display: "flex", justifyContent: "center", }}>
                        <Box
                            component="img"
                            src={imgLocal}
                            alt="Ambiente Li Beauty"
                            sx={{
                                width: "100%",
                                maxWidth: 550,
                                borderRadius: "40px",
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.37)"
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};