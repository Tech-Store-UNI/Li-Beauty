import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Link,
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import logo from "../../../img/logo.png";

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        background: "#f3e7e7",
        pt: 4,
        mt: 8,
      }}
    >
      {/* TOPO */}
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 2, md: 5 },
          pb: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1.2fr 1fr 1.2fr 1.4fr",
          },
          gap: 5,
          alignItems: "start",
        }}
      >
        {/* LOGO + REDES */}
        <Box>
          <Box
            component="img"
            src={logo}
            alt="LI Beauty"
            sx={{
              width: 180,
              mb: 2,
            }}
          />

          <Box sx={{ display: "flex", gap: 1.5 }}>
            <IconButton
              sx={{
                width: 48,
                height: 48,
                background: "#e9a8a8",
                color: "#fff",
                "&:hover": { background: "#df9494" },
              }}
            >
              <WhatsAppIcon />
            </IconButton>

            <IconButton
              sx={{
                width: 48,
                height: 48,
                background: "#e9a8a8",
                color: "#fff",
                "&:hover": { background: "#df9494" },
              }}
            >
              <MusicNoteIcon />
            </IconButton>

            <IconButton
              sx={{
                width: 48,
                height: 48,
                background: "#e9a8a8",
                color: "#fff",
                "&:hover": { background: "#df9494" },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        {/* MENU */}
        <Box>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 700,
              color: "#111",
              mb: 2,
            }}
          >
            Menu
          </Typography>

          {["Home", "Sobre", "Serviços", "Portfólio", "Contato"].map(
            (item, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: 14,
                  color: index === 0 ? "#d98f8f" : "#111",
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": {
                    color: "#d98f8f",
                  },
                }}
              >
                {item}
              </Typography>
            )
          )}
        </Box>

        {/* CONTATO */}
        <Box>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 700,
              color: "#111",
              mb: 2,
            }}
          >
            Contato
          </Typography>

          <Box sx={{ display: "flex", gap: 1, mb: 1.5 }}>
            <CallIcon sx={{ color: "#d98f8f", fontSize: 18 }} />
            <Typography sx={{ fontSize: 14 }}>
              (11) 96569-2005
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1, mb: 1.5 }}>
            <EmailIcon sx={{ color: "#d98f8f", fontSize: 18 }} />
            <Typography sx={{ fontSize: 14 }}>
              libeautystudio@gmail.com
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <AccessTimeIcon
              sx={{ color: "#d98f8f", fontSize: 18 }}
            />
            <Typography
              sx={{
                fontSize: 14,
                lineHeight: 1.5,
              }}
            >
              Terça à Sexta: 10h às 20h
              <br />
              Sábado: 10h às 17h
            </Typography>
          </Box>
        </Box>

        {/* ENDEREÇO */}
        <Box>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 700,
              color: "#111",
              mb: 2,
            }}
          >
            Endereço
          </Typography>
        </Box>
      </Box>

      {/* FAIXA MEIO */}
      <Box
        sx={{
          width: "100%",
          background: "#fff",
          py: 2,
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 15,
            color: "#111",
          }}
        >
          <b>LIBEAUTY©</b> 2026 - Todos os direitos reservados -
          CNPJ: 26.525.610/0001-00
        </Typography>
      </Box>

      {/* RODAPÉ FINAL */}
      <Box
        sx={{
          py: 2,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 15,
            color: "#111",
          }}
        >
          Desenvolvimento : <b>@CodeTech</b>
        </Typography>
      </Box>
    </Box>
  );
};