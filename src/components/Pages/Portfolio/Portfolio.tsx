import React from "react";
import { Box, Typography, Container } from "@mui/material";
import FotoPortfolio from "../../../img/FotoPortfolio.jpg";

import AtsExtensãoCilios1 from "../../../img/Ats-ExtensãoCilios1.png";
import DpsExtensãoCilios1 from "../../../img/Dps-ExtensãoCilios1.png";
import AtsExtensãoCilios2 from "../../../img/Ats-ExtensãoCilios2.png";
import DpsExtensãoCilios2 from "../../../img/Dps-ExtensãoCilios2.png";

import AtsMicropigmentacao1 from "../../../img/Ats-micropigmentacao1.png";
import DpsMicropigmentacao1 from "../../../img/Dps-micropigmentacao1.png";
import AtsMicropigmentacao2 from "../../../img/Ats-micropigmentacao2.png";
import DpsMicropigmentacao2 from "../../../img/Dps-micropigmentacao2.png";

import AtsLahsLifting1 from "../../../img/Ats-LahsLifting1.png";
import DpsLahsLifting1 from "../../../img/Dps-LahsLifting1.png";
import AtsLahsLifting2 from "../../../img/Ats-LahsLifting2.png";
import DpsLahsLifting2 from "../../../img/Dps-LahsLifting2.png";

import AtsDesing1 from "../../../img/Ats-Desing1.png";
import DpsDesing1 from "../../../img/Dps-Desing1.png";

import { textGradient } from "../../../styles/StylesComun.style";
import { getGradient } from "../../../util/gradients";

const Img = ({ src, contain = false }: { src?: string; h?: number; contain?: boolean; zoom?: string; }) => (
  <Box sx={{ width: "100%", borderRadius: "16px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", }}>
    <Box
      component="img"
      src={src}
      sx={{
        width: 250,
        height: "100%",
        objectFit: contain ? "contain" : "cover",
        objectPosition: "center",
      }}
    />
  </Box>
);

const Label = ({ text, dark = false, }: { text: string; dark?: boolean; }) => (
  <Typography sx={{ fontWeight: 800, fontSize: { xs: 18, md: 24 }, color: dark ? "#fff" : "#1f1f1f", letterSpacing: 1, textAlign: "center", mb: 1, }} >
    {text}
  </Typography>
);

const Hero = () => {
  return (
    <Box sx={{ py: { xs: 5, md: 8 }, }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" }, gap: 5, alignItems: "center", }}>
          <Box>
            <Typography sx={{ fontSize: { xs: 28, md: 42 }, lineHeight: 1.1, fontWeight: 300, color: "#1f1f1f", }}>
              <Box component="span" sx={{ background: getGradient("dark"), ...textGradient, fontWeight: 700, }}>
                LI BEAUTY
              </Box>
              - TRANSFORMANDO
              BELEZA EM ARTE
            </Typography>

            <Typography sx={{ mt: 3, color: "#5e5e5e", fontSize: { xs: 14, md: 15 }, lineHeight: 1.8, maxWidth: 620, }}>
              Cada trabalho realizado representa mais do que uma mudança
              estética. É uma verdadeira transformação de beleza, autoestima e
              confiança. No nosso portfólio, você encontra resultados que
              valorizam a essência de cada cliente, respeitando seus traços e
              destacando o que há de mais bonito de forma natural e harmoniosa.
            </Typography>
          </Box>

          <Box sx={{ position: "relative", maxWidth: 330, mx: "auto", }}>
            <Box sx={{ position: "absolute", inset: 12, border: "2px solid #f1c7c7", borderRadius: "24px", }} />

            <Box
              component="img"
              src={FotoPortfolio}
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

const DarkSection = ({ title, description, images, }: { title: string; description: string; images: string[]; }) => {
  const isExtensao = title === "EXTENSÃO DE CÍLIOS";

  return (
    <Box sx={{ background: "linear-gradient(180deg, #7d4a4a 0%, #6a3939 50%, #5a2f2f 100%)", py: { xs: 5, md: 12 }, }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 5, alignItems: "center", }}>
          <Box>
            <Typography sx={{ background: getGradient("texto-banner"), ...textGradient, fontSize: { xs: 28, md: 38 }, fontWeight: 800, mb: 2, lineHeight: 1, }}>
              {title}
            </Typography>

            <Typography sx={{ color: "#f8eaea", fontSize: 14, lineHeight: 1.8, mb: 4, }}>
              {description}
            </Typography>

            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, }}>
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
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, }}>
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

            <Typography sx={{ color: "#f5dede", fontSize: 13, mt: 3, lineHeight: 1.8, }}>
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

const LightSection = ({ title, description, images, }: { title: string; description: string; images: string[]; }) => {
  return (
    <Box sx={{ py: { xs: 5, md: 10 }, }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 5, alignItems: "center", }}>
          <Box>
            <Typography sx={{ background: getGradient("dark"), ...textGradient, fontSize: { xs: 28, md: 35 }, fontWeight: 800, mb: 2, lineHeight: 1, }}>
              {title}
            </Typography>

            <Typography sx={{ color: "#4f4f4f", fontSize: 14, lineHeight: 1.8, mb: 4, }}>
              {description}
            </Typography>

            {images[2] && images[3] && (
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, }}>
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
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, }}>
              <Box>
                <Label text="ANTES" />
                <Img src={images[0]} h={320} />
              </Box>

              <Box>
                <Label text="DEPOIS" />
                <Img src={images[1]} h={320} />
              </Box>
            </Box>

            <Typography sx={{ color: "#555", fontSize: 13, mt: 3, lineHeight: 1.8, }}>
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
        images={[DpsExtensãoCilios1, AtsExtensãoCilios1, DpsExtensãoCilios2, AtsExtensãoCilios2]}
      />

      <LightSection
        title="MICROPIGMENTAÇÃO SOBRANCELHAS"
        description="A micropigmentação é uma técnica que implanta pigmentos na pele para corrigir falhas, definir o formato e valorizar as sobrancelhas."
        images={[AtsMicropigmentacao1, DpsMicropigmentacao1, AtsMicropigmentacao2, DpsMicropigmentacao2]}
      />

      <DarkSection
        title="LASH LIFTING"
        description="O lash lifting é um procedimento que curva e hidrata os cílios naturais, proporcionando um efeito elegante e sofisticado."
        images={[AtsLahsLifting1, DpsLahsLifting1, AtsLahsLifting2, DpsLahsLifting2]}
      />

      <LightSection
        title="DESING DE SOBRANCELHAS COM HENNA"
        description="O design de sobrancelhas é realizado de forma personalizada, respeitando o formato do rosto e proporcionando harmonia ao olhar."
        images={[AtsDesing1, DpsDesing1]}
      />
    </Box>
  );
};