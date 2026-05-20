import { Cilios } from '../../components/Pages/Servicos/Cilios/Cilios'
import { Micropigmentacao } from '../../components/Pages/Servicos/Micropigmentacao/Micropigmentacao'
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export const Servicos = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ marginTop: { xs: '-50px', md: '-150px' }, position: 'relative', zIndex: 1000 }}>
        <Cilios/>
        <Micropigmentacao/>
      <Container maxWidth="lg" sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 'bold' }}>
          Nossos Serviços
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate('/servicos/cilios')}
          >
            Cílios
          </Button>
          
          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate('/servicos/maquiagem')}
          >
            Maquiagem
          </Button>
          
          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate('/servicos/sobrancelhas')}
          >
            Sobrancelhas
          </Button>
        </Box>
      </Container>
    </Box>
  );

