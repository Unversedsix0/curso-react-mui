import React from 'react'
import { Box } from '@mui/material'
import { To, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useDrawerContext } from '../../contexts'
import { Drawer, useTheme, Avatar, Divider, List, ListItemButton, ListItemIcon, ListItemText, Icon, useMediaQuery } from '@mui/material'


interface IListItemLinkProps {
    onClick: (() => void) | undefined;
    label: String;
    icon: String;
    to: To;

}

const ListItemLink: React.FC<IListItemLinkProps> = (props) => {
    const navigate = useNavigate();
    const resolvedPath = useResolvedPath(props.to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(props.to);
        props.onClick?.();
    }

    return (
        <ListItemButton
            selected={!!match}
            onClick={handleClick}>
            <ListItemIcon>
                <Icon>
                    {props.icon}
                </Icon>
            </ListItemIcon>
            <ListItemText primary={props.label} />
        </ListItemButton>

    )
}



interface IMenuLateralProps {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { isDrawerOpen, toggleDrawerOpen,drawerOptions} = useDrawerContext();

    return (
        <>
            <Drawer
                variant={smDown ? "temporary" : "permanent"}
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
                          {drawerOptions.map(drawerOptions => (
                                  <ListItemLink
                                  key={drawerOptions.key}
                                  icon={drawerOptions.icon}
                                  label={drawerOptions.label}
                                  to={drawerOptions.path}
                                  onClick={smDown ? toggleDrawerOpen : undefined}
                              />
                          ))}

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
