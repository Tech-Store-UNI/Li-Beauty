import { Box, Typography, Container } from "@mui/material";
import { getGradient } from "../../../../util/gradients";
import { textGradient } from "../../../../styles/StylesComun.style";

export const Politicas = () => {
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
                            POLÍTICAS DO{" "}
                            <Box
                                component="span"
                                sx={{
                                    background: getGradient("dark"),
                                    ...textGradient,
                                    fontWeight: 600,
                                }}
                            >
                                STUDIO
                            </Box>
                        </Typography>

                        <Box sx={{ mb: 4 }}>
                            {[
                                {
                                    bold: "Agendamentos",
                                    text: "O horário só é reservado mediante a pagamento de sinal e confirmação do agendamento. Pedimos comprometimento com o horário marcado.",
                                },
                                {
                                    bold: "Atrasos",
                                    text: "Tolerância de até 10 minutos. Após esse tempo, o atendimento poderá ser reagendado conforme disponibilidade e pagamento de sinal.",
                                },
                                {
                                    bold: "Cancelamentos",
                                    text: "Cancelamentos ou remarcações devem ser feitos com no mínimo 24h de antecedência.",
                                },
                                {
                                    bold: "Manutenções",
                                    text: "As manutenções devem ser realizadas dentro do prazo de 15 a 20 dias  para garantir a durabilidade e o resultado do procedimento.",
                                },
                            ].map((item, index) => (
                                <Typography key={index} sx={{ mb: 2, color: "text.primary", lineHeight: 1.6, fontSize: 18, textAlign: "justify" }}>
                                    <strong>{item.bold}</strong> – {item.text}
                                </Typography>
                            ))}
                        </Box>

                        

                    </Box>

                    <Box
                       
                    >
                        
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};