import { Box, Typography, Grid, TextField, Button, MenuItem, InputAdornment, Divider, Fade, IconButton, } from "@mui/material";
import type { FormDataProps } from "../ModalAgendamento";
import theme from "../../../../../theme";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { maskName, maskTelefone } from "../../../../../util/masc";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
    formData: FormDataProps;
    setFormData: any;
    prevStep: () => void;
    onClose: () => void;
    onSave: (data: FormDataProps) => void;
}

export const StepTwoAgendamento = ({ formData, setFormData, prevStep, onClose, onSave }: Props) => {

    const [success, setSuccess] = useState(false);

    const handleFinish = () => {
        console.log("Dados enviados:", formData);

        setSuccess(true);

        setTimeout(() => {
            onSave(formData);
            onClose();
        }, 3000);
    };

    const isFormValid = formData.nome && formData.email && formData.telefone && formData.pagamento;

    if (success) {
        return (
            <Fade in={success} timeout={500}>
                <Box sx={{ width: "100%", maxWidth: 550, background: "#fff", borderRadius: "8px", p: 6, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 2, minHeight: 500, }}>
                    <CheckCircleIcon sx={{ fontSize: 190, color: theme.palette.primary.main, }} />

                    <Typography sx={{ fontSize: "2rem", fontWeight: 700, color: "#333", }}>
                        Agendamento confirmado!
                    </Typography>

                    <Typography sx={{ fontSize: "1rem", color: "#666", maxWidth: 350, lineHeight: 1.6, }}>
                        Seu agendamento com a LiBeauty já está confirmado.
                    </Typography>
                </Box>
            </Fade>
        );
    }

    return (
        <Box sx={{ width: "100%", maxWidth: 680, background: "#fff", borderRadius: "10px", p: 4, position: "relative", height: 570 }}>
            <IconButton onClick={onClose} sx={{ position: "absolute", right: 16, top: 16 }}>
                <CloseIcon />
            </IconButton>

            <Typography sx={{ textAlign: "center", fontSize: "1.5rem", mb: 2, }}>
                FINALIZAR AGENDAMENTO
            </Typography>


            <Grid container spacing={1.5}>
                <Grid size={12}>
                    <TextField
                        fullWidth
                        label="Nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: maskName(e.target.value) })}
                    />
                </Grid>

                <Grid size={6}>
                    <TextField
                        fullWidth
                        label="E-mail"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value, })}

                    />
                </Grid>

                <Grid size={6}>
                    <TextField
                        fullWidth
                        label="Telefone"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: maskTelefone(e.target.value), })}
                    />
                </Grid>

                <Grid size={12}>
                    <TextField
                        select
                        fullWidth
                        label="Pagamento"
                        value={formData.pagamento}
                        onChange={(e) => setFormData({ ...formData, pagamento: e.target.value, })}
                    >
                        <MenuItem value="Débito">Débito</MenuItem>
                        <MenuItem value="Pix">Pix</MenuItem>
                        <MenuItem value="Cartão">Cartão</MenuItem>
                        <MenuItem value="Dinheiro">Dinheiro</MenuItem>
                    </TextField>
                </Grid>
            </Grid>
            <Box sx={{ mt: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2, }}>
                    <Typography sx={{ fontSize: 16, color: "#333", whiteSpace: "nowrap", }}>
                        Confirmação de agendamento
                    </Typography>

                    <Divider sx={{ flex: 1 }} />
                </Box>

                <Grid container spacing={1.5}>
                    <Grid size={6}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Categoria"
                            value={formData.categoria}
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                                inputLabel: {
                                    shrink: true
                                }
                            }}
                            sx={confirmationInputStyle}
                        />
                    </Grid>

                    <Grid size={6}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Serviço"
                            value={formData.servico}
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                                inputLabel: {
                                    shrink: true
                                }
                            }}
                            sx={confirmationInputStyle}
                        />
                    </Grid>

                    {/* Valor */}
                    <Grid size={6}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Valor"
                            value={formData.valor}
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                                inputLabel: {
                                    shrink: true
                                }
                            }}
                            sx={confirmationInputStyle}
                        />
                    </Grid>

                    <Grid size={6}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Data e horário"
                            value={`${formData.data
                                ? dayjs(formData.data).format("DD/MM/YYYY")
                                : ""
                                } - ${formData.hora || ""}`}
                            slotProps={{
                                input: {
                                    readOnly: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CalendarMonthIcon
                                                sx={{
                                                    color: theme.palette.primary.main,
                                                    fontSize: 18,
                                                }}
                                            />
                                        </InputAdornment>
                                    ),
                                }
                            }}
                            sx={confirmationInputStyle}
                        />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4, }}>
                <Box sx={{ display: "flex", border: "1px solid #EA9999", borderRadius: "20px", height: 23 }}>
                    <Box onClick={prevStep} sx={{ px: 3, color: theme.palette.primary.main, cursor: "pointer" }}>1</Box>
                    <Box sx={{ px: 3, background: theme.palette.primary.main, color: "#fff", fontWeight: 700, fontSize: 14, borderRadius: "0 20px 20px 0" }}>2</Box>
                </Box>
                <Box sx={{ display: "flex", gap: 1.5 }}>
                    <Button onClick={prevStep} sx={{ px: 3 }} variant="outlined">
                        Voltar
                    </Button>
                    <Button
                        onClick={handleFinish}
                        disabled={!isFormValid}
                        sx={{ background: theme.palette.primary.main, color: "#fff", px: 2.2, "&:hover": { background: theme.palette.primary.main, }, "&.Mui-disabled": { background: "#dfdfdf", color: "#ffffff",cursor: "not-allowed", }, }}>
                        Agendar
                    </Button>
                </Box>
            </Box>

        </Box>

    );


};



const confirmationInputStyle = {
    "& .MuiOutlinedInput-root": {
        borderRadius: "6px",
        background: "#F8F8F8",
        height: 54,
        opacity: 0.8,

        "& fieldset": {
            borderColor: "#F1B6B6",
        },
    },

    "& input": {
        fontSize: 14,
        color: "#666",
        cursor: "not-allowed",
    },
};