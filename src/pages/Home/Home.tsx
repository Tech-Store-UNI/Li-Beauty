    import { Box } from '@mui/material'
    import { Features } from '../../components/Pages/Home/Features/Features'
    import { Sobre } from '../../components/Pages/Home/Sobre/Sobre'
    import { Catalogo } from '../../components/Pages/Home/Catalogos/Catalogos'
    import { LocalEstabelecimento } from '../../components/Pages/Home/LocalEstabelecimento/LocalEstabelecimento'
    import { EntreContato } from '../../components/Pages/Home/EntreContato/EntreContato'
    import { Banner } from '../../components/Pages/Home/Banner/Banner'
    import { useAppDispatch, useAppSelector } from '../../app/store'
    import { selectTodosUsuarios } from '../../features/usuarios/usuarios.selectors'
    import { useEffect } from 'react'
    import { buscarTodosUsuarios } from '../../features/usuarios/usuarios.thunks'



    export const Home = () => {

        const dispatch = useAppDispatch();
        const usuarios = useAppSelector(selectTodosUsuarios);

        useEffect(() => {
            dispatch(buscarTodosUsuarios());
        }, [dispatch]);

        console.log("Usuarios :", usuarios);
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
