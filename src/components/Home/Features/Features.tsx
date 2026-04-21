import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { features } from './util/util';

export const Features: React.FC = () => {
    return (
        <Box component="section" sx={{ py: { xs: 6, md: 10 }, position: 'relative' }}>
            <Container maxWidth="lg">

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)'
                        },
                        gap: 3,

                        transform: {
                            xs: 'none',
                            md: 'translateY(-80px)'
                        },

                        position: 'relative',
                        zIndex: 2,
                    }}
                >
                    {features.map((item, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                minHeight: 220,
                                borderRadius: '20px',
                                overflow: 'hidden',
                                textAlign: 'center',
                                background: "#ffffffee",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: '0.3s',

                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                                }
                            }}
                        >
                            {/* Ícone */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    minHeight: 100,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={item.icon}
                                    alt={item.title}
                                    sx={{
                                        height: 60,
                                        maxWidth: 140,
                                        objectFit: 'contain',
                                        mt: 2
                                    }}
                                />
                            </Box>

                            {/* Conteúdo */}
                            <Box sx={{ px: { xs: 2, md: 3 }, pb: 3 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#E88D8C',
                                        fontWeight: 700,
                                        mb: 1,
                                        fontSize: {
                                            xs: '1.1rem',
                                            md: '1.25rem'
                                        }
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        color: '#666',
                                        lineHeight: 1.6,
                                        fontSize: {
                                            xs: '0.9rem',
                                            md: '1rem'
                                        }
                                    }}
                                >
                                    {item.description}
                                </Typography>
                            </Box>
                        </Paper>
                    ))}
                </Box>

            </Container>
        </Box>
    );
};