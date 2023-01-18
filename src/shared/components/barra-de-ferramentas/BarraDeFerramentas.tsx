import { Box, TextField, Button, Paper, useTheme, InputAdornment, Icon } from '@mui/material'
import React from 'react'

export const BarraDeFerramentas = () => {
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
            <TextField
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

            />
            <Box flex={1} display='flex' justifyContent='end'>
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    endIcon={<Icon>add</Icon>}
                > Novo </Button>
            </Box>

        </Box>
    )
}
