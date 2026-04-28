import React from "react";
import { Box, Typography } from "@mui/material";
import avaliacao1 from "../../../img/avaliacao1.png";

export const Avaliacoes: React.FC = () => {
  const cards = [
    {
      nome: "Daniel LGBT da Silva",
      tempo: "2 meses atrás",
      texto:
        "Excelente atendimento do começo ao fim! Fez exatamente o que eu pedi, amei!",
    },
    {
      nome: "Yan Gay do Santos",
      tempo: "4 meses atrás",
      texto:
        "Profissional super atenciosa e talentosa! Adorei o resultado, com certeza voltarei!",
    },
    {
      nome: "Gustavo Lima dos Homossexuais",
      tempo: "4 meses atrás",
      texto:
        "Muito capricho e cuidado em cada detalhe! Superou minhas expectativas!",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "#f4f4f4",
        py: 8,
        px: { xs: 2, md: 5 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* LADO ESQUERDO */}
        <Box
          sx={{
            width: { xs: "100%", md: "32%" },
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* circulo */}
          <Box
            sx={{
              width: 320,
              height: 320,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #8f3d47 0%, #d78687 100%)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
         <Box
  component="img"
  src={avaliacao1}
  alt="cliente"
  sx={{
    width: "125%",
    height: "125%",
    objectFit: "cover",
    objectPosition: "center top",
    borderRadius: "50%",
    transform: "translateY(18px)",
  }}
/>
          </Box>

          {/* balões decorativos */}
          <Box
            sx={{
              position: "absolute",
              top: 10,
              right: 35,
              width: 45,
              height: 45,
              borderRadius: "50%",
              background: "#d7b7b8",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 45,
              right: 0,
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "#d9d9d9",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 20,
              left: 0,
              width: 60,
              height: 40,
              borderRadius: "10px",
              background: "#d9d9d9",
            }}
          />
        </Box>

        {/* DIREITA */}
        <Box sx={{ width: { xs: "100%", md: "68%" } }}>
          <Typography
            sx={{
              color: "#d37b7c",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "1px",
              mb: 1,
            }}
          >
            NÓS SOMOS SINÔNIMO DE QUALIDADE !
          </Typography>

          <Typography
            sx={{
              color: "#111",
              fontSize: { xs: "30px", md: "32px" },
              fontWeight: 400,
              lineHeight: 1.1,
              mb: 5,
              maxWidth: "820px",
            }}
          >
            Veja o que nosso clientes dizem nas avaliações do Google !
          </Typography>

          {/* CARDS */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {cards.map((item, index) => (
              <Box key={index}>
                {/* topo */}
                <Box
                  sx={{
                    background:
                      "linear-gradient(90deg,#e6aaaa 0%, #82353e 100%)",
                    color: "#fff",
                    borderRadius: "14px 14px 0 0",
                    p: 2.2,
                    minHeight: 112,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1.3,
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        border: "1px solid #fff",
                        flexShrink: 0,
                      }}
                    />

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "15px",
                          lineHeight: 1.1,
                        }}
                      >
                        {item.nome}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "13px",
                          mt: 0.8,
                          opacity: 0.95,
                        }}
                      >
                        {item.tempo}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      textAlign: "right",
                      fontSize: "16px",
                      mt: 1,
                      letterSpacing: "1px",
                    }}
                  >
                    ★★★★★
                  </Typography>

                  {/* ponta */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -30,
                      left: 0,
                      width: 0,
                      height: 0,
                      borderLeft: "38px solid #7d3038",
                      borderTop: "30px solid transparent",
                    }}
                  />
                </Box>

                {/* parte branca */}
                <Box
                  sx={{
                    background: "#fff",
                    borderRadius: "0 0 14px 14px",
                    px: 2,
                    py: 2,
                    boxShadow: "0 3px 8px rgba(0,0,0,0.14)",
                    minHeight: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#555",
                      fontSize: "15px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.texto}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};