import React from 'react';
import { Box, Container, Typography, Link, Stack, IconButton,  } from '@mui/material';
import { Phone, Email, AccessTime } from '@mui/icons-material';
import logoFooter from "../../img/Logo.png"
import whatsIcon from '../../img/Whats.png';
import instaIcon from '../../img/Instagram.png';
import tiktokIcon from '../../img/Tiktok.png';
import { getGradient } from '../../util/gradients';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" sx={{ bgcolor: '#FFF5F5', pt: 6 }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 4, mb: 6 }}>

                    <Box sx={{ flex: 1.5 }}>
                        <Box sx={{ mb: 2 }}>
                            <Box
                                component="img"
                                src={logoFooter}
                                alt="Icon Estabelecimento"
                                sx={{ width: 240, }}
                            />
                        </Box>
                        <Stack direction="row" spacing={1.5} sx={{ display: "flex", justifyContent: "center" }}>
                            <Link href="https://wa.me/" target="_blank" rel="noopener">
                                <IconButton sx={{ p: 0, }}>
                                    <Box component="img" src={whatsIcon} alt="WhatsApp" sx={{ width: 60, height: 60, background: getGradient('texto-banner'), p: 1, borderRadius: 100 }} />
                                </IconButton>
                            </Link>
                            <Link href="https://www.tiktok.com/@" target="_blank" rel="noopener">
                                <IconButton sx={{ p: 0 }}>
                                    <Box component="img" src={tiktokIcon} alt="TikTok" sx={{ width: 60, height: 60, background: getGradient('texto-banner'), p: 1, borderRadius: 100 }} />
                                </IconButton>
                            </Link>
                            <Link href="https://www.instagram.com/" target="_blank" rel="noopener">
                                <IconButton sx={{ p: 0 }}>
                                    <Box component="img" src={instaIcon} alt="Instagram" sx={{ width: 60, height: 60, background: getGradient('texto-banner'), p: 1, borderRadius: 100 }} />
                                </IconButton>
                            </Link>
                        </Stack>
                    </Box>
                    

                    <Box sx={{ flex: .8 }}>
                        <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
                            Menu
                        </Typography>
                        <Stack spacing={1}>
                            <Link href="#" sx={{}}>Home</Link>
                            <Link href="#" color="text.primary" underline="none">Sobre</Link>
                            <Link href="#" color="text.primary" underline="none">Serviços</Link>
                            <Link href="#" color="text.primary" underline="none">Portfólio</Link>
                            <Link href="#" color="text.primary" underline="none">Contato</Link>
                            
                        </Stack>
                    </Box>

                    <Box sx={{ flex: 1.5 }}>
                        <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
                            Contato
                        </Typography>
                        <Stack spacing={2}>
                            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                                <Phone sx={{ color: '#F9C7C7' }} fontSize="small" />
                                <Typography variant="body1">(11) 94489-2012</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                                <Email sx={{ color: '#F9C7C7' }} fontSize="small" />
                                <Typography variant="body1">email@libeauty.com.br</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                                <AccessTime sx={{ color: '#F9C7C7' }} fontSize="small" />
                                <Typography variant="body1">Segunda à Sexta: 8h às 18h</Typography>
                            </Stack>
                        </Stack>
                    </Box>

                    <Box sx={{ flex: 1.5 }}>
                        <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
                            Endereço
                        </Typography>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.1531495903055!2d-46.60209950000001!3d-23.454939600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7b94a377ed7%3A0x6e05abe49126a110!2sLi%20Beauty%20Studio!5e0!3m2!1spt-BR!2sbr!4v1776736386321!5m2!1spt-BR!2sbr" width="400" height="210" style={{ border: 0, borderRadius: 10, boxShadow: '0 0px 10px rgba(0, 0, 0, 0.36)' }} loading="lazy"></iframe>
                    </Box>

                </Box>
            </Container>

            <Box sx={{ bgcolor: 'white', py: 3, borderTop: '1px solid #F0F0F0', textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    <strong>LIBEAUTY© {currentYear}</strong> - Todos os direitos reservados - CNPJ: 26.525.610/0001-00
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Desenvolvimento: <strong>@CodeTech</strong>
                </Typography>
            </Box>
        </Box>
    );
};