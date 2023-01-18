import React from 'react'
import { Drawer, useTheme, Avatar, Divider } from '@mui/material'
import { Box } from '@mui/material'


interface IMenuLateralProps {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

    const theme = useTheme();

    return (

        <>
            <Drawer
                variant="permanent"
                anchor="left"
            >
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar 
                        sx={{
                            height:theme.spacing(12),
                            width:theme.spacing(12)
                        
                    
                        }}
                        src="http://disneyplusbrasil.com.br/wp-content/uploads/2022/12/Avatar-Loak.jpg" />
                    </Box>
                    <Divider/>
                    <Box flex={1}>

                    </Box>
                        

                </Box>

            </Drawer>
            <Box height="100vh" marginLeft={theme.spacing(28)}>
                {children}

            </Box>

        </>
    )
}
