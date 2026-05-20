import { Box } from '@mui/material'
import { ConheceInfos } from '../../components/Pages/Sobre/Conheca/Conhece'
import { ExperienciaStudio } from '../../components/Pages/Sobre/ExperienciaStudio/ExperienciaStudio'
import { PorQueEscolher } from '../../components/Pages/Sobre/PorQueEscolher/PorQueEscolher'
import { MissaoStudio } from '../../components/Pages/Sobre/MissaoStudio/MissaoStudio'
import { Politicas } from '../../components/Pages/Sobre/Politicas/Politicas'

export const Sobre = () => {
    return (
        <Box sx={{ marginTop: { xs: '-50px', md: '-80px' }, position: 'relative', zIndex: 1000 }}>
            <ConheceInfos />
            <ExperienciaStudio />
            <PorQueEscolher />
            <MissaoStudio />
            <Politicas />
        </Box>
    )
}
