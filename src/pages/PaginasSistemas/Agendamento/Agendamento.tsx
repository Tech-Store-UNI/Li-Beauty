import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const Agendamento: React.FC = () => {
    return (
        <Container maxWidth={false} disableGutters sx={{ height: "70vh", display: 'flex', alignItems: 'center', justifyContent: 'center', }}>

            <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, px: 3 }}>

                <CalendarMonthIcon sx={{ fontSize: 100, color: '#eb9494' }} />

                <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', color: '#000', mt: 1 }}>
                    Agenda Li Beauty
                </Typography>

                <Box>
                    <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.4 }}>
                        O seu melhor horário está a um clique de distância.
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.4 }}>
                        Vamos agendar?
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        mt: 1,
                        color: '#fff',
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#d88383', // Cor um pouco mais escura no hover
                        },
                    }}
                >
                    Agendar horario
                </Button>
            </Box>
        </Container>
    );
};