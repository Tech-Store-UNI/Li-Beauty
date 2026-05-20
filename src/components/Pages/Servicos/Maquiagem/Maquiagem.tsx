import { Box, Typography, Container } from '@mui/material';
import { getGradient } from '../../../../util/gradients';
import { textGradient } from '../../../../styles/StylesComun.style';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Buttonpadrao } from '../../../Buttonpadrao/ButtonPadrao';
import { PackageCard } from '../../../PackageCard/PackageCard';
import { Maquiagens } from './util/util';


export const Maquiagem = () => {
    return (
        <Box component="section" sx={{ width: "100%", backgroundSize: "cover", backgroundPosition: "center", py: 3 }}>
            <Container maxWidth="xl" sx={{ mt: 7 }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, background: getGradient("dark"), ...textGradient, textTransform: 'uppercase' }}>
                        MAQUIAGENS
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography variant="body1" sx={{ color: 'text.primary', mb: 1, textAlign: "justify", width: 1100 }}>
                            Escolha o procedimento ideal para valorizar suas sobrancelhas com um design personalizado. Realizamos
                            serviços de sobrancelhas com técnicas que valorizam a expressão e harmonizam o rosto. Na Li Beauty,
                            cada atendimento é personalizado para entregar um resultado natural, delicado e alinhado ao estilo
                            de cada cliente.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ width: '100%', pb: 10 }}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            1100: { slidesPerView: 1.8 },
                        }}
                    >
                        {Maquiagens.map((pacote) => (
                            <SwiperSlide key={pacote.id}>
                                <PackageCard item={pacote} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 10, mx: 3, }}>
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, background: getGradient("dark"), ...textGradient, textTransform: 'uppercase' }}>
                            MAQUIAGEM CONVENCIONAL
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography variant="body1" sx={{ color: 'text.primary', mb: 1, textAlign: "justify" }}>
                                Beleza com leveza e elegância! Perfeita para festas, ensaios ou ocasiões mais rápidas,
                                a maquiagem convencional entrega um resultado lindo e profissional, mas sem a técnica
                                de blindagem. A durabilidade média é de até 3 horas, podendo variar conforme o clima e
                                tipo de pele. O estilo da make pode ser o mesmo — o que muda é apenas o acabamento e a
                                fixação, já que não são utilizados produtos de blindagem.
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, background: getGradient("dark"), ...textGradient, textTransform: 'uppercase' }}>
                            MAQUIAGEM 100% BLINDADA
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography variant="body1" sx={{ color: 'text.primary', mb: 1, textAlign: "justify" }}>
                                Beleza que dura o dia todo! Perfeita para noivas, formandas e eventos especiais, a
                                maquiagem blindada é resistente à água, lágrimas, suor e atritos, Garantindo um visual
                                impecável por mais de 15 horas. Utilizo produtos de altíssima qualidade, as melhores
                                marcas do mercado, para uma pele selada, confortável e com acabamento luxuoso. A
                                técnica proporciona mais segurança e tranquilidade para você aproveitar cada momento
                                sem se preocupar com retoques.
                            </Typography>
                        </Box>
                    </Box>

                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", my: 10 }}>
                    <Buttonpadrao />
                </Box>
            </Container>
        </Box>
    );
};