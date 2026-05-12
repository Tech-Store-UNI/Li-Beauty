import React, { useState } from "react";

import {
  Box,
  Typography,
  Modal,
  Grid,
  TextField,
  MenuItem,
  Button,
  IconButton,
} from "@mui/material";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ModalAgendamento: React.FC<Props> = ({
  open,
  onClose,
}) => {
  const [step, setStep] = useState(1);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        {/* STEP 1 */}
        {step === 1 && (
          <Box
            sx={{
              width: 760,
              backgroundColor: "#fff",
              borderRadius: "8px",
              p: 3,
              outline: "none",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "32px",
                fontWeight: 500,
                mb: 3,
              }}
            >
              AGENDAMENTO
            </Typography>

            <Grid container spacing={1}>
              <Grid size={4}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  sx={inputStyle}
                >
                  <MenuItem>Cílios</MenuItem>
                </TextField>
              </Grid>

              <Grid size={4}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  sx={inputStyle}
                >
                  <MenuItem>Clássico</MenuItem>
                </TextField>
              </Grid>

              <Grid size={2}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="R$ 00,00"
                  sx={inputStyle}
                />
              </Grid>
            </Grid>

            {/* CALENDARIO */}
            <Box
              sx={{
                mt: 2,
                border: "1px solid #efb2b2",
                borderRadius: "6px",
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              {/* CALENDARIO */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: "34px",
                    fontWeight: 500,
                    mb: 2,
                  }}
                >
                  Janeiro 2026
                </Typography>

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
                          fontSize: "14px",
                          color: "#666",
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
                  ].map((n, i) => (
                    <Grid size={1} key={i}>
                      <Box
                        sx={{
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          backgroundColor:
                            n === 1
                              ? "#ea9999"
                              : "transparent",
                          color:
                            n === 1
                              ? "#fff"
                              : "#444",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "auto",
                          fontSize: "15px",
                          cursor: "pointer",
                        }}
                      >
                        {n}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* HORARIOS */}
              <Box
                sx={{
                  width: 90,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {[
                  "10:00",
                  "11:00",
                  "12:00",
                  "13:00",
                  "14:00",
                  "15:00",
                  "16:00",
                  "17:00",
                  "18:00",
                  "19:00",
                ].map((h, i) => (
                  <Button
                    key={i}
                    sx={{
                      border:
                        h === "10:00"
                          ? "none"
                          : "1px solid #efb2b2",

                      backgroundColor:
                        h === "10:00"
                          ? "#ea9999"
                          : "transparent",

                      color:
                        h === "10:00"
                          ? "#fff"
                          : "#444",

                      borderRadius: "20px",
                      textTransform: "none",
                    }}
                  >
                    {h}
                  </Button>
                ))}
              </Box>
            </Box>

            {/* FOOTER */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: "#ea9999",
                    color: "#fff",
                  }}
                >
                  <KeyboardArrowLeftIcon />
                </IconButton>

                <Typography color="#ea9999">
                  1
                </Typography>

                <IconButton
                  sx={{
                    backgroundColor: "#f3d1d1",
                    color: "#fff",
                  }}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Box>

              <Button
                onClick={() => setStep(2)}
                sx={{
                  backgroundColor: "#ea9999",
                  color: "#fff",
                  px: 4,
                  borderRadius: "6px",
                  textTransform: "none",
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
              width: 760,
              backgroundColor: "#fff",
              borderRadius: "8px",
              p: 3,
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "32px",
                fontWeight: 500,
                mb: 3,
              }}
            >
              AGENDAMENTO
            </Typography>

            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  fullWidth
                  placeholder="Mãe do Yan"
                  size="small"
                  sx={inputStyle}
                />
              </Grid>

              <Grid size={6}>
                <TextField
                  fullWidth
                  placeholder="E-mail"
                  size="small"
                  sx={inputStyle}
                />
              </Grid>

              <Grid size={6}>
                <TextField
                  fullWidth
                  placeholder="(00) 00000-0000"
                  size="small"
                  sx={inputStyle}
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  sx={inputStyle}
                >
                  <MenuItem>Pix</MenuItem>
                  <MenuItem>Cartão</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 4,
              }}
            >
              <Button
                onClick={() => setStep(1)}
                sx={{
                  border: "1px solid #ea9999",
                  color: "#ea9999",
                  px: 4,
                  textTransform: "none",
                }}
              >
                Voltar
              </Button>

              <Button
                sx={{
                  backgroundColor: "#ea9999",
                  color: "#fff",
                  px: 4,
                  textTransform: "none",
                }}
              >
                Agendar
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",

    "& fieldset": {
      borderColor: "#efb2b2",
    },

    "&:hover fieldset": {
      borderColor: "#ea9999",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#ea9999",
    },
  },
};