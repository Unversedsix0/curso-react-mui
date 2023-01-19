import { Box, TextField, Button, Paper, useTheme, InputAdornment, Icon } from '@mui/material'
import React from 'react'

interface IBarraDeFerramentasProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDaBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarBotaoNovo?: () => void;

}

export const FerramentasDaListagem: React.FC<IBarraDeFerramentasProps> = ({
    textoDaBusca = '',
    textoBotaoNovo = 'Novo',
    mostrarInputBusca = false,
    mostrarBotaoNovo = true,
    aoMudarTextoDaBusca,
    aoClicarBotaoNovo
}) => {
    const theme = useTheme();
    return (
        <Box
            component={Paper}
            display='flex'
            alignItems='center'
            height={theme.spacing(5)}
            gap={1}
            padding={1}
            marginX={1}
            paddingX={2}


        >
            {mostrarInputBusca && (<TextField
                size='small'
                placeholder='Pesquisar...'
                color='primary'
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <Icon>search</Icon>
                        </InputAdornment>
                    )
                }}
                value={textoDaBusca}
                onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)}
            />)}

            <Box flex={1} display='flex' justifyContent='end'>
                {mostrarBotaoNovo && (<Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    endIcon={<Icon>add</Icon>}
                    onClick={aoClicarBotaoNovo}
                >
                    {textoBotaoNovo}
                </Button>
                )}
            </Box>

        </Box>
    )
}
