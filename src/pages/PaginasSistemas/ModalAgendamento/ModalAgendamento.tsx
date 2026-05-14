import React, { useState, useMemo } from "react";

import {
  Box,
  Typography,
  Modal,
  Grid,
  TextField,
  MenuItem,
  Button,
  IconButton,
  Divider,
  InputAdornment,
  Fade,
} from "@mui/material";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface Props {
  open: boolean;
  onClose: () => void;
}

const PRIMARY = "#EA9999";
const BORDER = "#F1B6B6";
const BG = "#FFFFFF";

// Mock de Dados
const CATEGORIAS = ["Cílios", "Sobrancelha", "Unhas", "Estética"];
const SERVICOS: Record<string, { nome: string; valor: string }[]> = {
  "Cílios": [
    { nome: "Clássico", valor: "R$ 120,00" },
    { nome: "Volume Russo", valor: "R$ 180,00" },
    { nome: "Volume Egípcio", valor: "R$ 150,00" },
  ],
  "Sobrancelha": [
    { nome: "Design Simples", valor: "R$ 45,00" },
    { nome: "Design com Henna", valor: "R$ 65,00" },
  ],
};

const HORARIOS = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

export const ModalAgendamento: React.FC<Props> = ({
  open,
  onClose,
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    categoria: "",
    servico: "",
    valor: "",
    data: 1, // Dia selecionado mockado
    hora: "",
    nome: "",
    email: "",
    telefone: "",
    pagamento: ""
  });

  const servicosDisponiveis = useMemo(() => SERVICOS[formData.categoria] || [], [formData.categoria]);

  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Fade in={open}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.45)",
          p: 2,
        }}
      >
        {/* STEP 1 */}
        {step === 1 && (
          <Box
            sx={{
              width: "100%",
              maxWidth: 760,
              background: BG,
              borderRadius: "14px",
              p: 3,
              position: "relative",
              outline: "none",
              boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
            }}
          >
            <IconButton 
              onClick={onClose}
              sx={{ position: "absolute", right: 16, top: 16, color: "#999" }}
            >
              <CloseIcon />
            </IconButton>

            {/* TITLE */}
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: 500,
                letterSpacing: "1px",
                mb: 3,
              }}
            >
              AGENDAMENTO
            </Typography>

            {/* TOP INPUTS */}
            <Grid container spacing={1.2}>
              <Grid size={5}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  placeholder="Selecione a categoria"
                  value={formData.categoria}
                  onChange={(e) => setFormData({ ...formData, categoria: e.target.value, servico: "", valor: "" })}
                  sx={inputStyle}
                >
                  {CATEGORIAS.map(cat => (
                    <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid size={5}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  placeholder="Tipo de serviço"
                  value={formData.servico}
                  disabled={!formData.categoria}
                  onChange={(e) => {
                    const s = servicosDisponiveis.find(x => x.nome === e.target.value);
                    setFormData({ ...formData, servico: e.target.value, valor: s?.valor || "" });
                  }}
                  sx={inputStyle}
                >
                  {servicosDisponiveis.map(s => (
                    <MenuItem key={s.nome} value={s.nome}>
                      {s.nome}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid size={2}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="R$ 00,00"
                  value={formData.valor}
                  slotProps={{ input: { readOnly: true } }}
                  sx={inputStyle}
                />
              </Grid>
            </Grid>

            {/* CALENDAR */}
            <Box
              sx={{
                mt: 2,
                border: `1px solid ${BORDER}`,
                borderRadius: "6px",
                p: 2,
                display: "flex",
                gap: 2,
              }}
            >
              {/* LEFT */}
              <Box sx={{ flex: 1 }}>
                {/* MONTH */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                    }}
                  >
                    Janeiro 2026
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton
                      size="small"
                      sx={{
                        background: "#F6D3D3",
                        width: 28,
                        height: 28,
                      }}
                    >
                      <KeyboardArrowLeftIcon
                        sx={{
                          fontSize: 18,
                          color: "#fff",
                        }}
                      />
                    </IconButton>

                    <IconButton
                      size="small"
                      sx={{
                        background: PRIMARY,
                        width: 28,
                        height: 28,
                      }}
                    >
                      <KeyboardArrowRightIcon
                        sx={{
                          fontSize: 18,
                          color: "#fff",
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box>

                {/* DAYS */}
                <Grid container columns={7}>
                  {[
                    "DOM",
                    "SEG",
                    "TER",
                    "QUA",
                    "QUI",
                    "SEX",
                    "SÁB",
                  ].map((day) => (
                    <Grid size={1} key={day}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: 13,
                          color: "#555",
                          mb: 1,
                        }}
                      >
                        {day}
                      </Typography>
                    </Grid>
                  ))}

                  {[
                    28, 29, 30, 31, 1, 2, 3,
                    4, 5, 6, 7, 8, 9, 10,
                    11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22, 23, 24,
                    25, 26, 27, 28, 29, 30, 31,
                    1, 2, 3, 4, 5, 6, 7,
                  ].map((n, i) => {
                    const isSelected = formData.data === n && i >= 4 && i <= 34;

                    return (
                      <Grid size={1} key={i}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            background: isSelected
                              ? PRIMARY
                              : "transparent",
                            color: isSelected
                              ? "#fff"
                              : i < 4 || i > 34
                              ? "#B7B7B7"
                              : "#444",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "auto",
                            fontSize: 14,
                            cursor: "pointer",
                            transition: "0.2s",
                            "&:hover": {
                              background: isSelected ? PRIMARY : "#FCEEEE"
                            }
                          }}
                          onClick={() => i >= 4 && i <= 34 && setFormData({...formData, data: n})}
                        >
                          {n}
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>

              {/* HOURS */}
              <Box
                sx={{
                  width: 82,
                  border: `1px solid ${BORDER}`,
                  borderRadius: "6px",
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.6,
                }}
              >
                {HORARIOS.map((h) => {
                  const isSelected = formData.hora === h;

                  return (
                    <Button
                      key={h}
                      onClick={() => setFormData({...formData, hora: h})}
                      sx={{
                        minWidth: "100%",
                        height: 30,
                        borderRadius: "20px",
                        border: isSelected
                          ? "none"
                          : "1px solid transparent",

                        background: isSelected
                          ? PRIMARY
                          : "transparent",

                        color: isSelected
                          ? "#fff"
                          : "#444",

                        fontSize: 12,
                        fontWeight: 500,
                        textTransform: "none",

                        "&:hover": {
                          background: isSelected
                            ? PRIMARY
                            : "#FAFAFA",
                        },
                      }}
                    >
                      {h}
                    </Button>
                  );
                })}
              </Box>
            </Box>

            {/* FOOTER */}
            <Box
              sx={{
                mt: 2.5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* STEPS */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <Box
                  sx={{
                    width: 34,
                    height: 12,
                    borderRadius: "20px",
                    background: "#F7DADA",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  1
                </Box>

                <Box
                  sx={{
                    width: 34,
                    height: 12,
                    borderRadius: "20px",
                    border: `1px solid ${BORDER}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    color: PRIMARY,
                    fontWeight: 700,
                  }}
                >
                  2
                </Box>
              </Box>

              {/* BUTTON */}
              <Button
                onClick={() => {
                  if(formData.servico && formData.hora) {
                    setStep(2);
                  }
                }}
                disabled={!formData.servico || !formData.hora}
                sx={{
                  background: PRIMARY,
                  color: "#fff",
                  px: 4,
                  height: 38,
                  borderRadius: "6px",
                  textTransform: "none",
                  fontWeight: 600,

                  "&:hover": {
                    background: "#DF8A8A",
                  },
                }}
              >
                Próximo
              </Button>
            </Box>
          </Box>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <Box
            sx={{
              width: "100%",
              maxWidth: 760,
              background: "#fff",
              borderRadius: "14px",
              p: 3,
              position: "relative",
              outline: "none",
              boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
            }}
          >
            <IconButton 
              onClick={onClose}
              sx={{ position: "absolute", right: 16, top: 16, color: "#999" }}
            >
              <CloseIcon />
            </IconButton>

            {/* TITLE */}
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: 500,
                letterSpacing: "1px",
                mb: 3,
              }}
            >
              AGENDAMENTO
            </Typography>

            {/* INPUTS */}
            <Grid container spacing={1.5}>
              <Grid size={12}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Mãe do Yan"
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  sx={inputStyle}
                />
              </Grid>

              <Grid size={6}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  sx={inputStyle}
                />
              </Grid>

              <Grid size={6}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  sx={inputStyle}
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  placeholder="Forma de pagamento"
                  value={formData.pagamento}
                  onChange={(e) => setFormData({...formData, pagamento: e.target.value})}
                  sx={inputStyle}
                >
                  <MenuItem>Pix</MenuItem>
                  <MenuItem>Cartão</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            {/* CONFIRM */}
            <Box sx={{ mt: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    color: "#333",
                    whiteSpace: "nowrap",
                  }}
                >
                  Confirmação de agendamento
                </Typography>

                <Divider sx={{ flex: 1 }} />
              </Box>

              <Grid container spacing={1.5}>
                <Grid size={6}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Categoria selecionada"
                    value={formData.categoria}
                    slotProps={{ input: { readOnly: true } }}
                    sx={inputStyle}
                  />
                </Grid>

                <Grid size={6}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Tipo serviço selecionado"
                    value={formData.servico}
                    slotProps={{ input: { readOnly: true } }}
                    sx={inputStyle}
                  />
                </Grid>

                <Grid size={6}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="R$ 00,00"
                    value={formData.valor}
                    slotProps={{ input: { readOnly: true } }}
                    sx={inputStyle}
                  />
                </Grid>

                <Grid size={6}>
                  <TextField
                    fullWidth
                    size="small"
                    value={`${formData.data}/01/2026 - ${formData.hora}`}
                    sx={inputStyle}
                    slotProps={{
                      input: {
                        readOnly: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarMonthIcon
                              sx={{
                                color: PRIMARY,
                                fontSize: 18,
                              }}
                            />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* FOOTER */}
            <Box
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* STEPS */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <Box
                  sx={{
                    width: 34,
                    height: 12,
                    borderRadius: "20px",
                    border: `1px solid ${BORDER}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    color: PRIMARY,
                    fontWeight: 700,
                  }}
                >
                  1
                </Box>

                <Box
                  sx={{
                    width: 34,
                    height: 12,
                    borderRadius: "20px",
                    background: PRIMARY,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  2
                </Box>
              </Box>

              {/* BUTTONS */}
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                }}
              >
                <Button
                  onClick={() => setStep(1)}
                  sx={{
                    border: `1px solid ${PRIMARY}`,
                    color: PRIMARY,
                    px: 4,
                    height: 38,
                    borderRadius: "6px",
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Voltar
                </Button>

                <Button
                  onClick={() => { console.log("Agendando...", formData); onClose(); }}
                  sx={{
                    background: PRIMARY,
                    color: "#fff",
                    px: 4,
                    height: 38,
                    borderRadius: "6px",
                    textTransform: "none",
                    fontWeight: 600,

                    "&:hover": {
                      background: "#DF8A8A",
                    },
                  }}
                >
                  Agendar
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      </Fade>
    </Modal>
  );
};

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    background: "#fff",
    height: 46,

    "& fieldset": {
      borderColor: "#F1B6B6",
    },

    "&:hover fieldset": {
      borderColor: "#EA9999",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#EA9999",
    },
  },

  "& input": {
    fontSize: 14,
  },
};