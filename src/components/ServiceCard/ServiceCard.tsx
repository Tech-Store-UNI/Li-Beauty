import { Box, Typography } from '@mui/material';

export const ServiceCard = ({ item }: { item: any }) => (
    <Box sx={{ position: 'relative', height: 280, borderRadius: '15px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', transition: 'transform 0.3s ease', width: 260, '&:hover': { transform: 'scale(1.01)' } }}>
        <Box
            component="img"
            src={item.img}
            alt={item.nome}
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 1
            }}
        />
        <Box sx={{ position: 'relative', zIndex: 3, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1rem', lineHeight: 1.2, maxWidth: '65%', textShadow: "3px 5px 16px #000000d8" }}>
                {item.nome}
            </Typography>

            <Box sx={{ bgcolor: '#fff', color: '#E88D8C', px: 1, py: 0.3, borderRadius: '6px', fontWeight: 800, fontSize: '.9rem' }}>
                {item.preco}
            </Box>
        </Box>
    </Box>
);
