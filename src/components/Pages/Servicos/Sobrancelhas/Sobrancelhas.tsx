import { Box, Typography, Container, Grid, Button } from '@mui/material';
import pacote3 from '../../../../img/Sobrancelha/Pacote 3.png';
import pacote4 from '../../../../img/Sobrancelha/Pacote 4.png';



export const Sobrancelhas = () => {
  return (
    <Box component="section" sx={{ width: "100%", backgroundColor: "#fff", py: 8 }}>
      <Container maxWidth="lg">
        {/* Header com fundo rosa claro */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 6,
          backgroundColor: '#fef5f5',
          py: 4,
          px: 3,
          borderRadius: 2,
          position: 'relative'
        }}>
          <Typography variant="h4" sx={{ 
            fontWeight: 'bold', 
            mb: 3, 
            color: '#d4948f',
            textTransform: 'uppercase',
            letterSpacing: 2
          }}>
            Sobrancelhas
          </Typography>
          <Typography variant="body1" sx={{ 
            color: '#333', 
            maxWidth: '900px', 
            mx: 'auto', 
            textAlign: 'center',
            lineHeight: 1.8,
            fontSize: '14px'
          }}>
            Escolha o procedimento ideal para valorizar suas sobrancelhas com um design personalizado. 
            Realizamos serviços de sobrancelhas com técnicas que valorizam a expressão e harmonizam o rosto. 
            Na Li Beauty, cada atendimento é personalizado para entregar um resultado natural, delicado e 
            ajustado ao estilo de cada cliente.
          </Typography>
        </Box>

        {/* Cards com imagens */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={3}>
            {/* Card 1 - Design */}
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                position: 'relative', 
                overflow: 'hidden', 
                borderRadius: 3,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                height: '350px'
              }}>
                <img 
                  src={pacote3} 
                  alt="Design de sobrancelhas"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  zIndex: 1
                }} />
                
                <Box sx={{ 
                  position: 'absolute', 
                  bottom: 30, 
                  left: 30,
                  zIndex: 2
                }}>
                  <Typography variant="h5" sx={{ 
                    fontWeight: 'bold', 
                    mb: 1,
                    color: '#fff',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    Design
                  </Typography>
                  <Box sx={{ 
                    backgroundColor: '#fff',
                    color: '#d4948f',
                    padding: '6px 16px',
                    borderRadius: 2,
                    display: 'inline-block',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>
                    R$ 50,00
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Card 2 - Design com Henna */}
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                position: 'relative', 
                overflow: 'hidden', 
                borderRadius: 3,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                height: '350px'
              }}>
                <img 
                  src={pacote4} 
                  alt="Design com Henna"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  zIndex: 1
                }} />
                
                <Box sx={{ 
                  position: 'absolute', 
                  bottom: 30, 
                  left: 30,
                  zIndex: 2
                }}>
                  <Typography variant="h5" sx={{ 
                    fontWeight: 'bold', 
                    mb: 1,
                    color: '#fff',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    Design com Henna
                  </Typography>
                  <Box sx={{ 
                    backgroundColor: '#fff',
                    color: '#d4948f',
                    padding: '6px 16px',
                    borderRadius: 2,
                    display: 'inline-block',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>
                    R$ 60,00
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Descrições dos Serviços */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 2, 
                color: '#d4948f',
                textTransform: 'uppercase',
                fontSize: '16px'
              }}>
                Design
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#333', 
                textAlign: 'justify', 
                lineHeight: 1.8,
                fontSize: '14px'
              }}>
                <strong>Sobrancelhas estudadas com naturalidade e elegância!</strong> O design de sobrancelhas valoriza a 
                simetria do rosto e realça o olhar de forma harmoniosa. Analisamos cada detalhe para criar um formato 
                personalizado, respeitando os fios naturais e buscando um resultado que valorize suas características únicas. 
                Com técnicas de remoção precisas, seja por pinça ou cera, garantimos sobrancelhas bem desenhadas e que 
                complementam sua beleza no dia a dia.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 2, 
                color: '#d4948f',
                textTransform: 'uppercase',
                fontSize: '16px'
              }}>
                Design com Henna
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#333', 
                textAlign: 'justify', 
                lineHeight: 1.8,
                fontSize: '14px'
              }}>
                <strong>Mais definição e expressão ao seu design!</strong> O design com henna ajuda a preencher falhas e valorizar o 
                formato natural das sobrancelhas com um efeito suave e duradouro. A henna é uma opção natural, ideal para quem deseja 
                realçar sem perder a delicadeza. Atendendo a escolha do tom mais adequado ao seu tipo de cabelo e pele, criamos 
                sobrancelhas marcantes que complementam o olhar com elegância.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Brow Lamination e Micropigmentação */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 2, 
                color: '#d4948f',
                textTransform: 'uppercase',
                fontSize: '16px'
              }}>
                Brow Lamination
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#333', 
                textAlign: 'justify', 
                lineHeight: 1.8,
                fontSize: '14px'
              }}>
                <strong>Sobrancelhas alinhadas com leveza e sofisticação!</strong> O brow lamination é uma técnica que alinha 
                os fios, deixando-os disciplinados e com volume. É ideal para quem deseja sobrancelhas mais cheias, com efeito 
                natural e duradouro. O tratamento reestrutura os fios, proporcionando um visual elegante e facilitando a manutenção. 
                Perfeito para todos os tipos de sobrancelhas, o brow lamination traz praticidade ao dia a dia sem perder a 
                naturalidade dos fios.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 2, 
                color: '#d4948f',
                textTransform: 'uppercase',
                fontSize: '16px'
              }}>
                Micropigmentação
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#333', 
                textAlign: 'justify', 
                lineHeight: 1.8,
                fontSize: '14px'
              }}>
                <strong>Mais expressão e equilíbrio para o seu olhar!</strong> A micropigmentação de sobrancelhas proporciona um 
                resultado duradouro e natural. Com essa técnica, é possível corrigir falhas, redefinir o formato e intensificar a 
                cor, criando um visual harmonioso. Realizada com pigmentos de alta qualidade, o procedimento garante segurança e um 
                acabamento impecável. Cada caso é avaliado individualmente, respeitando as características e necessidades, sempre 
                com cuidado e atenção aos detalhes dos fios.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Botão de Agendamento */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#d4948f',
              color: '#fff',
              padding: '14px 50px',
              borderRadius: 25,
              fontSize: '15px',
              textTransform: 'none',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(212, 148, 143, 0.3)',
              '&:hover': {
                backgroundColor: '#c88680'
              }
            }}
          >
            Agendamento online
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
