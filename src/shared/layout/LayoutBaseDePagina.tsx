import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import { useTheme, IconButton, Icon, useMediaQuery } from '@mui/material';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseDePaginaProps {
    children: React.ReactNode;
    titulo: String;
    barraDeFerramentas?: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = (props) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} gap={1} display="flex" alignItems="center"
                height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}  >
                {smDown && (<IconButton onClick={toggleDrawerOpen}>
                    <Icon>
                        menu
                    </Icon>
                </IconButton>)}

                <Typography
                    variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                    overflow='hidden'
                    lineHeight='nowrap'
                    textOverflow='ellipsis'
                >
                    {props.titulo}
                </Typography>

            </Box>
            {props.barraDeFerramentas && (<Box>
                {props.barraDeFerramentas}
            </Box>)}

            <Box flex={1} overflow='auto'>
                {props.children}
            </Box>

        </Box>
    )
}
