import React from "react";
import { Box, Typography, Container } from "@mui/material";


const Img = ({ h = 140 }: { h?: number }) => (
  <Box
    sx={{
      width: "100%",
      height: h,
      borderRadius: "18px",
      background: "#d9d9d9",
      border: "1.5px solid #f1a3a3",
    }}
  />
);

const Hero = () => (
  <Box sx={{ background: "#f5f5f5", py: 6 }}>
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >

        <Box sx={{ maxWidth: 520 }}>
          <Typography sx={{ fontSize: 26, fontWeight: 600 }}>
            <Box component="span" sx={{ color: "#e57373", fontWeight: 700 }}>
              LI BEAUTY
            </Box>{" "}
            - TRANSFORMANDO <br />
            BELEZA EM ARTE
          </Typography>

          <Typography sx={{ mt: 2, fontSize: 14, color: "#555" }}>
           Cada trabalho realizado representa mais do que uma mudança estética. É uma verdadeira transformação de beleza, autoestima e confiança. No nosso portfólio, você encontra resultados que valorizam a essência de cada cliente, respeitando seus traços e destacando o que há de mais bonito de forma natural e harmoniosa.
          </Typography>
        </Box>

        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              width: 220,
              height: 160,
              borderRadius: "16px",
              border: "2px solid #f1a3a3",
            }}
          />

          <Box
            sx={{
              width: 220,
              height: 160,
              borderRadius: "16px",
              background: "#d9d9d9",
              position: "relative",
            }}
          />
        </Box>
      </Box>
    </Container>
  </Box>
);


const SectionDark = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Box
    sx={{
      background: "linear-gradient(135deg, #7B3F3F, #6a3434)",
      py: 5,
    }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#ffb3b3",
              fontWeight: 700,
              mb: 1,
              fontSize: 20,
            }}
          >
            {title}
          </Typography>

          <Typography sx={{ color: "#fff", fontSize: 13, mb: 3 }}>
            {description}
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            {["ANTES", "DEPOIS"].map((t, i) => (
              <Box key={i} sx={{ flex: 1 }}>
                <Typography align="center" sx={{ color: "#fff", mb: 1 }}>
                  {t}
                </Typography>

                <Img />
              </Box>
            ))}
          </Box>
        </Box>

       
        <Box>
   
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mb: 1,
            }}
          >
            <Typography sx={{ color: "#fff" }}>ANTES</Typography>
            <Typography sx={{ color: "#fff" }}>DEPOIS</Typography>
          </Box>

         
          <Box sx={{ display: "flex", gap: 2 }}>
            <Img h={220} />
            <Img h={220} />
          </Box>

          <Typography sx={{ color: "#fff", fontSize: 12, mt: 2 }}>
            Na Li Beauty, cada aplicação é feita de forma personalizada,
            garantindo um resultado natural e sofisticado.
          </Typography>
        </Box>
      </Box>
    </Container>
  </Box>
);


const SectionLight = ({
  title,
  description,
  reverse = false,
}: {
  title: string;
  description: string;
  reverse?: boolean;
}) => (
  <Box sx={{ background: "#f5f5f5", py: 6 }}>
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
          alignItems: "center",
          direction: reverse ? "rtl" : "ltr",
        }}
      >
      
        <Box sx={{ direction: "ltr" }}>
          <Typography
            sx={{ color: "#d85c5c", fontWeight: 700, mb: 2 }}
          >
            {title}
          </Typography>

          <Typography sx={{ fontSize: 14, color: "#333", mb: 3 }}>
            {description}
          </Typography>

         
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography align="center" sx={{ mb: 1 }}>
                ANTES
              </Typography>
              <Img />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography align="center" sx={{ mb: 1 }}>
                DEPOIS
              </Typography>
              <Img />
            </Box>
          </Box>
        </Box>

    
        <Box sx={{ direction: "ltr" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography align="center" sx={{ mb: 1 }}>
                ANTES
              </Typography>
              <Img h={200} />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography align="center" sx={{ mb: 1 }}>
                DEPOIS
              </Typography>
              <Img h={200} />
            </Box>
          </Box>

          <Typography sx={{ fontSize: 12, mt: 2 }}>
            Resultado natural, harmônico e duradouro.
          </Typography>
        </Box>
      </Box>
    </Container>
  </Box>
);


export const Portifolio: React.FC = () => {
  return (
    <Box>

      <Hero />

      <SectionDark
        title="EXTENSÃO DE CÍLIOS"
        description="A extensão de cílios é um procedimento que realça o olhar, proporcionando mais definição e volume."
      />

      <SectionLight
        title="MICROPIGMENTAÇÃO SOBRANCELHAS"
        description="Procedimento que corrige falhas e define o formato das sobrancelhas."
      />

      <SectionDark
        title="LASH LIFTING"
        description="Técnica que curva os cílios naturais deixando o olhar mais marcante."
      />

      <SectionLight
        title="DESIGN DE SOBRANCELHAS COM HENNA"
        description="Realce natural das sobrancelhas com preenchimento temporário."
        reverse
      />

    </Box>
  );
};