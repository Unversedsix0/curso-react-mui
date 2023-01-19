import { Box,  Button, Paper, useTheme, Icon, Divider } from '@mui/material'

import React from 'react'

export const FerramentasDeDetalhe = () => {

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
      <Button
        variant="contained"
        color="primary"
        disableElevation
        startIcon={<Icon>save</Icon>}
      >
        Salvar
      </Button>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Icon>save</Icon>}
      >
        Salvar e Voltar
      </Button>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Icon>delete</Icon>}
      >
        Apagar
      </Button>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Icon>add</Icon>}
      >
        Novo
      </Button>

      <Divider
      variant='middle'
      orientation='vertical'
      />
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Icon>arrow_back</Icon>}
      >
        Voltar
      </Button>
    </Box>

  )
}
