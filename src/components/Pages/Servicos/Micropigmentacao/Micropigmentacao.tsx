import { Box, Typography, Container } from "@mui/material";
import { getGradient } from "../../../../util/gradients.ts";
import { textGradient } from "../../../../styles/StylesComun.style.ts";
import {
  pacotesMicropigmentacao,
  todosMicropigmentacaoServices,
} from "./util";
import fundoCilios from "../../../../img/fundoCilios.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Buttonpadrao } from "../../../Buttonpadrao/ButtonPadrao";

const ServiceCard = ({ item }: { item: any }) => (
  <Box
    sx={{
      position: "relative",
      overflow: "hidden",
      borderRadius: "20px",
      height: 350,
    }}
  >
    <img
      src={item.img}
      alt={item.nome}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />

    {/* Faixa rosa */}
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "140px",
        background:
          "linear-gradient(to top, rgba(244, 143, 177, 0.9), transparent)",
      }}
    />

    {/* Conteúdo */}
    <Box
      sx={{
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontWeight: 700,
          fontSize: "1rem",
          lineHeight: 1.2,
          maxWidth: "65%",
          textShadow: "3px 5px 16px #000000d8",
        }}
      >
        {item.nome}
      </Typography>

      <Box
        sx={{
          bgcolor: "#fff",
          color: "#E88D8C",
          px: 1,
          py: 0.3,
          borderRadius: "6px",
          fontWeight: 800,
          fontSize: ".9rem",
        }}
      >
        {item.preco}
      </Box>
    </Box>
  </Box>
);

const PackageCard = ({ item }: { item: any }) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      overflow: "hidden",
      borderRadius: "20px",
    }}
  >
    <Box
      component="img"
      src={item.img}
      sx={{
        width: "100%",
        objectFit: "cover",
      }}
    />

    <Box
      sx={{
        position: "absolute",
        bottom: 35,
        left: 30,
        color: "#fff",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        {item.nome}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          {item.detalhes.map((d: string, i: number) => (
            <Typography key={i} sx={{ ml: 0.5, fontSize: 20 }}>
              {d}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "end", width: 300 }}>
          <Box
            sx={{
              position: "relative",
              top: 35,
              backgroundColor: "background.paper",
              p: 2,
              height: 20,
              borderRadius: 2,
              width: 100,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                textDecoration: "line-through",
                opacity: 0.8,
                color: "primary.main",
                fontWeight: 900,
              }}
            >
              {item.precoAntigo}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

export const Micropigmentacao = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundImage: `url(${fundoCilios})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 5,
      }}
    >
      <Container maxWidth="xl" sx={{ mt: 7 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 1,
              background: getGradient("dark"),
              ...textGradient,
              textTransform: "uppercase",
            }}
          >
            Serviços Individuais
          </Typography>

          <Typography variant="body2" sx={{ color: "text.primary", mb: 1 }}>
            Realce sua beleza natural com técnicas modernas de
            micropigmentação.
          </Typography>
        </Box>

        <Box sx={{ width: "100%", mb: 10 }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4.5 },
            }}
          >
            {todosMicropigmentacaoServices.map((servico: any) => (
              <SwiperSlide key={servico.id}>
                <ServiceCard item={servico} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              background: getGradient("dark"),
              ...textGradient,
              textTransform: "uppercase",
            }}
          >
            Pacotes
          </Typography>

          <Typography variant="body2" sx={{ color: "text.primary", mb: 1 }}>
            Procedimentos completos com qualidade e economia para você.
          </Typography>
        </Box>

        <Box sx={{ width: "100%", pb: 5 }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              1100: { slidesPerView: 1.8 },
            }}
          >
            {pacotesMicropigmentacao.map((pacote: any) => (
              <SwiperSlide key={pacote.id}>
                <PackageCard item={pacote} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", my: 6 }}>
          <Buttonpadrao />
        </Box>
      </Container>
    </Box>
  );
};