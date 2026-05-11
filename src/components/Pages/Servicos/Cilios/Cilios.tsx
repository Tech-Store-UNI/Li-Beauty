import { Box, Typography, Container } from '@mui/material';
import { getGradient } from '../../../../util/gradients';
import { textGradient } from '../../../../styles/StylesComun.style';
import { pacotesCilios, todosCiliosServices } from './util/util';
import fundoCilios from "../../../../img/fundoCilios.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Buttonpadrao } from '../../../Buttonpadrao/ButtonPadrao';
import { ServiceCard } from '../../../ServiceCard/ServiceCard';
import { PackageCard } from '../../../PackageCard/PackageCard';


export const Cilios = () => {
    return (
        <Box component="section" sx={{ width: "100%", backgroundImage: `url(${fundoCilios})`, backgroundSize: "cover", backgroundPosition: "center", py: 5 }}>
            <Container maxWidth="xl" sx={{ mt: 7 }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, background: getGradient("dark"), ...textGradient, textTransform: 'uppercase' }}>
                        Serviços Individuais
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>
                        Escolha o procedimento ideal para realçar seu olhar com um toque personalizado.
                    </Typography>
                </Box>

                <Box sx={{ width: '100%', mb: 10 }}>
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
                        {todosCiliosServices.map((servico) => (
                            <SwiperSlide key={servico.id}>
                                <ServiceCard item={servico} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>

                <Box sx={{ textAlign: 'center', mb: 7}}>
                    <Typography variant="h4" sx={{ fontWeight: 600, background: getGradient("dark"), ...textGradient, textTransform: 'uppercase' }}>
                        Pacotes
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>
                        Aproveite nossos combos e mantenha seu olhar sempre impecável com mais economia
                    </Typography>
                </Box>

                <Box sx={{ width: '100%', pb: 5 }}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            1100: { slidesPerView: 1.8 },
                        }}
                    >
                        {pacotesCilios.map((pacote) => (
                            <SwiperSlide key={pacote.id}>
                                <PackageCard item={pacote} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
                <Box sx={{display: "flex", justifyContent: "center", my: 6}}>
                    <Buttonpadrao />
                </Box>
            </Container>
        </Box>
    );
};