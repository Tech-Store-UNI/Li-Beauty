import { Box, Typography, Container } from '@mui/material';
import { getGradient } from '../../../../util/gradients';
import { textGradient } from '../../../../styles/StylesComun.style';

import { Buttonpadrao } from '../../../Buttonpadrao/ButtonPadrao';
import { PackageCard } from '../../../PackageCard/PackageCard';
import { Sobrancelhas as SobrancelhasData } from './util/util';

export const Sobrancelhas = () => {
    return (
        <Box component="section" sx={{ width: "100%", py: 5 }}>
            <Container maxWidth="lg">
                {/* Título */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 600,
                            mb: 3,
                            background: getGradient("dark"),
                            ...textGradient,
                            textTransform: 'uppercase'
                        }}
                    >
                        SOBRANCELHAS
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: 900,
                            mx: "auto",
                            textAlign: "center",
                            lineHeight: 1.8
                        }}
                    >
                        Escolha o procedimento ideal para valorizar suas sobrancelhas com um design personalizado.
                        Realizamos serviços de sobrancelhas com técnicas que valorizam a expressão e harmonizam o rosto.
                        Na Li Beauty, cada atendimento é personalizado para entregar um resultado natural, delicado e
                        alinhado ao estilo de cada cliente.
                    </Typography>
                </Box>

                {/* 2 cards em cima */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 4,
                        mb: 8
                    }}
                >
                    {SobrancelhasData.map((pacote) => (
                        <PackageCard key={pacote.id} item={pacote} />
                    ))}
                </Box>

                {/* textos exatamente 2x2 */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        columnGap: 8,
                        rowGap: 6
                    }}
                >
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, background: getGradient("dark"), ...textGradient }}>
                            DESIGN
                        </Typography>
                        <Typography sx={{ textAlign: "justify", lineHeight: 1.9 }}>
                            <strong>Sobrancelhas alinhadas com naturalidade e elegância!</strong> O design de sobrancelhas valoriza o formato do rosto e realça o olhar harmonioso. É realizado com técnicas que definem e embelezam, respeitando fios naturais e buscando um resultado equilibrado e sofisticado.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, background: getGradient("dark"), ...textGradient }}>
                            DESIGN COM HENNA
                        </Typography>
                        <Typography sx={{ textAlign: "justify", lineHeight: 1.9 }}>
                            <strong>Mais definição e destaque para o seu olhar!</strong> O design com henna ajuda a preencher falhas e valorizar o formato natural das sobrancelhas com um efeito suave e harmonioso.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, background: getGradient("dark"), ...textGradient }}>
                            BROW LAMINATION
                        </Typography>
                        <Typography sx={{ textAlign: "justify", lineHeight: 1.9 }}>
                            <strong>Sobrancelhas alinhadas com leveza e sofisticação!</strong> O brow lamination organiza e direciona os fios, proporcionando um efeito mais preenchido, moderno e natural.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, background: getGradient("dark"), ...textGradient }}>
                            MICROPIGMENTAÇÃO
                        </Typography>
                        <Typography sx={{ textAlign: "justify", lineHeight: 1.9 }}>
                            <strong>Mais expressão e equilíbrio para o seu olhar!</strong> A micropigmentação de sobrancelhas proporciona um efeito definido e natural, auxiliando a corrigir falhas e realçar a expressão.
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