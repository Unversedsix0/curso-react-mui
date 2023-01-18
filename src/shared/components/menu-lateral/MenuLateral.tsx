import { Drawer, useTheme, Avatar, Divider, List, ListItemButton, ListItemIcon, ListItemText,Icon,useMediaQuery } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { useDrawerContext } from '../../contexts'


interface IMenuLateralProps {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { isDrawerOpen,toggleDrawerOpen } = useDrawerContext();

    return (

        <>
            <Drawer
                variant= {smDown ? "temporary" : "permanent"}
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawerOpen}
                
            >
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            sx={{
                                height: theme.spacing(12),
                                width: theme.spacing(12)


                            }}
                            src="http://disneyplusbrasil.com.br/wp-content/uploads/2022/12/Avatar-Loak.jpg" />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>
                                        home
                                    </Icon>
                                </ListItemIcon>
                                <ListItemText primary="Pagina Inicial" />
                            </ListItemButton>
                        </List>

                    </Box>


                </Box>

            </Drawer>
            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}

            </Box>

        </>
    )
}
