import { Box, Typography, Container } from '@mui/material';
import { getGradient } from '../../../../util/gradients';
import { textGradient } from '../../../../styles/StylesComun.style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Buttonpadrao } from '../../../Buttonpadrao/ButtonPadrao';
import { PackageCard } from '../../../PackageCard/PackageCard';
import { SobrancelhasMock } from './util/util';


export const Sobrancelhas = () => {
    return (
        <Box component="section" sx={{ width: "100%", backgroundSize: "cover", backgroundPosition: "center", py: 3 }}>
            <Container maxWidth="xl" sx={{ mt: 7 }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, background: getGradient("dark"), ...textGradient, textTransform: 'uppercase' }}>
                        SOBRANCELHAS
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography variant="body1" sx={{ color: 'text.primary', mb: 1, textAlign: "justify", width: 1100 }}>
                            Escolha o procedimento ideal para valorizar suas sobrancelhas com um design personalizado.
                            Realizamos serviços de sobrancelhas com técnicas que valorizam a expressão e harmonizam
                            o rosto. Na Li Beauty, cada atendimento é personalizado para entregar um resultado natural,
                            delicado e alinhado ao estilo de cada cliente.
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
                        {SobrancelhasMock.map((pacote) => (
                            <SwiperSlide key={pacote.id}>
                                <PackageCard item={pacote} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", columnGap: 8, rowGap: 6, px: 3 }}>
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, background: getGradient("dark"), ...textGradient }}>
                            DESIGN
                        </Typography>
                        <Typography sx={{ textAlign: "justify", lineHeight: 1.9 }}>
                            <strong>Sobrancelhas alinhadas com naturalidade e elegância!</strong>{" "}
                            O design de sobrancelhas valoriza o formato do rosto e realça o olhar de forma harmoniosa e delicada.
                            Cada atendimento é feito de maneira personalizada, respeitando os fios naturais e buscando um resultado
                            equilibrado, leve e sofisticado. Ideal para quem deseja manter as sobrancelhas bem definidas e cuidadas no dia a dia.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, background: getGradient("dark"), ...textGradient }}>
                            DESIGN COM HENNA
                        </Typography>
                        <Typography sx={{ textAlign: "justify", lineHeight: 1.9 }}>
                            <strong>Mais definição e destaque para o seu olhar!</strong>{" "}
                            O design com henna ajuda a preencher falhas e valorizar o formato natural das sobrancelhas com um efeito suave e harmonioso,
                            valorizando a expressão do rosto sem perder a delicadeza. A tonalidade é escolhida de forma personalizada,
                            garantindo um resultado elegante e natural.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, background: getGradient("dark"), ...textGradient }}>
                            BROW LAMINATION
                        </Typography>
                        <Typography sx={{ textAlign: "justify", lineHeight: 1.9 }}>
                            <strong>Sobrancelhas alinhadas com leveza e sofisticação!</strong>{" "}
                            O brow lamination organiza e direciona os fios, proporcionando um efeito mais preenchido, moderno e natural.
                            Ideal para quem deseja sobrancelhas bem definidas por mais tempo, com um acabamento elegante e prático para o dia a dia.
                            O resultado valoriza o olhar sem perder a naturalidade dos fios.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, background: getGradient("dark"), ...textGradient }}>
                            MICROPIGMENTAÇÃO
                        </Typography>
                        <Typography sx={{ textAlign: "justify", lineHeight: 1.9 }}>
                            <strong>Mais expressão e equilíbrio para o seu olhar!</strong>{" "}
                            A micropigmentação de sobrancelhas proporciona um efeito definido e natural, ajudando a destacar o desenho dos fios
                            e suavizar imperfeições. Cada procedimento é realizado de forma personalizada, buscando um acabamento delicado,
                            sofisticado e duradouro, em harmonia com o rosto de cada cliente.
                        </Typography>
                    </Box>

                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                    <Buttonpadrao />
                </Box>

            </Container>
        </Box>
    );
};