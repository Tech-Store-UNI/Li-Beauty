import { Box } from '@mui/material'
import { Features } from '../../components/Pages/Home/Features/Features'
import { Sobre } from '../../components/Pages/Home/Sobre/Sobre'
import { Catalogo } from '../../components/Pages/Home/Catalogos/Catalogos'
import { LocalEstabelecimento } from '../../components/Pages/Home/LocalEstabelecimento/LocalEstabelecimento'
import { EntreContato } from '../../components/Pages/Home/EntreContato/EntreContato'
import { Banner } from '../../components/Pages/Home/Banner/Banner'



export const Home = () => {
    return (
        <Box>
            <Banner />
            <Box sx={{ marginTop: { xs: '-50px', md: '-90px' }, position: 'relative', zIndex: 1000 }}>
                <Features />
                <Sobre />
                <Catalogo />
                <LocalEstabelecimento />
                <EntreContato />

            </Box>
        </Box>
    )
}
