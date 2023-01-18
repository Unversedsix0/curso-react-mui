import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import { useTheme, IconButton, Icon, useMediaQuery } from '@mui/material';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseDePaginaProps {
    children: React.ReactNode
    titulo: String;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = (props) => {
    const theme= useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const {toggleDrawerOpen} = useDrawerContext();
    
    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} height={theme.spacing(12)} gap={1} display="flex" alignItems="center">
               {smDown && (<IconButton onClick={toggleDrawerOpen}>
                  <Icon>
                    menu
                  </Icon>
                </IconButton>)}

                <Typography variant='h5'>
                {props.titulo}
                </Typography>
                
            </Box>
            <Box>
                Barra de Ferramentas
            </Box>
            <Box>
                {props.children}
            </Box>

        </Box>
    )
}
