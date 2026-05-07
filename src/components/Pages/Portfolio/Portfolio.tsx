import React from "react";
import { Box, Typography, Container } from "@mui/material";

import ft1 from "../../../img/ft 1.jpg";
import ft2 from "../../../img/ft 2.jpg";
import ft3 from "../../../img/ft 3.jpg";
import ft4 from "../../../img/ft 4.jpg";
import ft5 from "../../../img/ft 5.jpg";
import ft6 from "../../../img/ft 6.jpg";
import ft7 from "../../../img/ft 7.jpg";
import ft8 from "../../../img/ft 8.jpg";
import ft9 from "../../../img/ft 9.jpg";
import ft10 from "../../../img/ft 10.jpg";
import ft11 from "../../../img/ft 11.jpg";
import ft12 from "../../../img/ft 12.jpg";
import ft13 from "../../../img/ft 13.jpg";
import ft14 from "../../../img/ft 14.jpg";
import ft15 from "../../../img/ft 15.jpg";

const Img = ({
  src,
  h = 160,
  contain = false,
  zoom = "100%",
}: {
  src?: string;
  h?: number;
  contain?: boolean;
  zoom?: string;
}) => (
  <Box
    sx={{
      width: "100%",
      height: h,
      borderRadius: "16px",
      border: "2px solid #f1c7c7",
      background: contain ? "#8b5757" : "#ddd",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box
      component="img"
      src={src}
      sx={{
        width: zoom,
        height: "100%",
        objectFit: contain ? "contain" : "cover",
        objectPosition: "center",
      }}
    />
  </Box>
);

const Label = ({
  text,
  dark = false,
}: {
  text: string;
  dark?: boolean;
}) => (
  <Typography
    sx={{
      fontWeight: 800,
      fontSize: { xs: 18, md: 24 },
      color: dark ? "#fff" : "#1f1f1f",
      letterSpacing: 1,
      textAlign: "center",
      mb: 1,
    }}
  >
    {text}
  </Typography>
);

const Hero = () => {
  return (
    <Box
      sx={{
        background: "#f5efed",
        py: { xs: 5, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
            gap: 5,
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 28, md: 42 },
                lineHeight: 1.1,
                fontWeight: 300,
                color: "#1f1f1f",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#de8f8f",
                  fontWeight: 700,
                }}
              >
                LI BEAUTY
              </Box>{" "}
              - TRANSFORMANDO
              <br />
              BELEZA EM ARTE
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: "#5e5e5e",
                fontSize: { xs: 14, md: 15 },
                lineHeight: 1.8,
                maxWidth: 620,
              }}
            >
              Cada trabalho realizado representa mais do que uma mudança
              estética. É uma verdadeira transformação de beleza, autoestima e
              confiança. No nosso portfólio, você encontra resultados que
              valorizam a essência de cada cliente, respeitando seus traços e
              destacando o que há de mais bonito de forma natural e harmoniosa.
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
              maxWidth: 330,
              mx: "auto",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 12,
                border: "2px solid #f1c7c7",
                borderRadius: "24px",
              }}
            />

            <Box
              component="img"
              src={ft1}
              sx={{
                width: "100%",
                height: { xs: 280, md: 360 },
                objectFit: "cover",
                borderRadius: "24px",
                position: "relative",
                zIndex: 1,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const DarkSection = ({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: string[];
}) => {
  const isExtensao = title === "EXTENSÃO DE CÍLIOS";

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #7d4a4a 0%, #6a3939 50%, #5a2f2f 100%)",
        py: { xs: 5, md: 7 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 5,
            alignItems: "center",
          }}
        >
          {/* TEXTO + IMGS PEQUENAS */}
          <Box>
            <Typography
              sx={{
                color: "#ffb1b1",
                fontSize: { xs: 28, md: 38 },
                fontWeight: 800,
                mb: 2,
                lineHeight: 1,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "#f8eaea",
                fontSize: 14,
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              {description}
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
              }}
            >
              <Box>
                <Label text="ANTES" dark />

                <Img
                  src={images[0]}
                  h={420}
                  contain={isExtensao}
                  zoom={isExtensao ? "260%" : "100%"}
                />
              </Box>

              <Box>
                <Label text="DEPOIS" dark />

                <Img
                  src={images[1]}
                  h={420}
                  contain={isExtensao}
                  zoom={isExtensao ? "260%" : "100%"}
                />
              </Box>
            </Box>
          </Box>

          {/* IMGS GRANDES */}
          <Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
              }}
            >
              <Box>
                <Label text="ANTES" dark />

                <Img
                  src={images[2]}
                  h={420}
                  contain={isExtensao}
                  zoom={isExtensao ? "260%" : "100%"}
                />
              </Box>

              <Box>
                <Label text="DEPOIS" dark />

                <Img
                  src={images[3]}
                  h={420}
                  contain={isExtensao}
                  zoom={isExtensao ? "260%" : "100%"}
                />
              </Box>
            </Box>

            <Typography
              sx={{
                color: "#f5dede",
                fontSize: 13,
                mt: 3,
                lineHeight: 1.8,
              }}
            >
              Na Li Beauty, cada aplicação é realizada de forma personalizada,
              analisando o formato do rosto, curvatura natural dos cílios e o
              estilo que mais combina com a cliente.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const LightSection = ({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: string[];
}) => {
  return (
    <Box
      sx={{
        background: "#f5efed",
        py: { xs: 5, md: 7 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 5,
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#e28f8f",
                fontSize: { xs: 28, md: 38 },
                fontWeight: 800,
                mb: 2,
                lineHeight: 1,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "#4f4f4f",
                fontSize: 14,
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              {description}
            </Typography>

            {images[2] && images[3] && (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 2,
                }}
              >
                <Box>
                  <Label text="ANTES" />
                  <Img src={images[2]} h={220} />
                </Box>

                <Box>
                  <Label text="DEPOIS" />
                  <Img src={images[3]} h={220} />
                </Box>
              </Box>
            )}
          </Box>

          <Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
              }}
            >
              <Box>
                <Label text="ANTES" />
                <Img src={images[0]} h={320} />
              </Box>

              <Box>
                <Label text="DEPOIS" />
                <Img src={images[1]} h={320} />
              </Box>
            </Box>

            <Typography
              sx={{
                color: "#555",
                fontSize: 13,
                mt: 3,
                lineHeight: 1.8,
              }}
            >
              O procedimento proporciona mais simetria, definição e
              naturalidade, valorizando ainda mais a beleza do rosto.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export const Portifolio: React.FC = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Hero />

      <DarkSection
        title="EXTENSÃO DE CÍLIOS"
        description="A extensão de cílios é um procedimento que realça o olhar, proporcionando mais definição, volume e sofisticação."
        images={[ft3, ft2, ft5, ft4]}
      />

      <LightSection
        title="MICROPIGMENTAÇÃO SOBRANCELHAS"
        description="A micropigmentação é uma técnica que implanta pigmentos na pele para corrigir falhas, definir o formato e valorizar as sobrancelhas."
        images={[ft12, ft13, ft14, ft15]}
      />

      <DarkSection
        title="LASH LIFTING"
        description="O lash lifting é um procedimento que curva e hidrata os cílios naturais, proporcionando um efeito elegante e sofisticado."
        images={[ft10, ft11, ft8, ft9]}
      />

      <LightSection
        title="DESING DE SOBRANCELHAS COM HENNA"
        description="O design de sobrancelhas é realizado de forma personalizada, respeitando o formato do rosto e proporcionando harmonia ao olhar."
        images={[ft7, ft6]}
      />
    </Box>
  );
};