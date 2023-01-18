import { Box } from '@mui/system'
import React from 'react'

interface ILayoutBaseDePaginaProps {
    children: React.ReactNode
    titulo: String;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = (props) => {
    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box>
                {props.titulo}
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
