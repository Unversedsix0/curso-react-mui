import { Box, Button, Paper, useTheme, Icon, Divider } from '@mui/material'

import React from 'react'
interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoSalvarEVoltar?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmSalvarEVoltar?: () => void;




}
export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoSalvarEVoltar = false,

  aoClicarEmNovo,
  aoClicarEmSalvar,
  aoClicarEmApagar,
  aoClicarEmVoltar,
  aoClicarEmSalvarEVoltar,

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
     {mostrarBotaoSalvar &&( <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={aoClicarEmSalvar}
        startIcon={<Icon>save</Icon>}
      >
        Salvar
      </Button>)}

    { mostrarBotaoSalvarEVoltar &&(  <Button
        variant="outlined"
        color="primary"
        disableElevation
        onClick={aoClicarEmSalvarEVoltar}
        startIcon={<Icon>save</Icon>}
      >
        Salvar e Voltar
      </Button>)}

     {mostrarBotaoApagar &&( <Button
        variant="outlined"
        color="primary"
        disableElevation
        onClick={aoClicarEmApagar}
        startIcon={<Icon>delete</Icon>}
      >
        Apagar
      </Button>)}
      
      {mostrarBotaoNovo &&(<Button
        variant="outlined"
        color="primary"
        disableElevation
        onClick={aoClicarEmNovo}
        startIcon={<Icon>add</Icon>}
      >
        Novo
      </Button>)}

      <Divider
        variant='middle'
        orientation='vertical'
      />

    {mostrarBotaoVoltar &&(<Button
        variant="outlined"
        color="primary"
        disableElevation
        onClick={aoClicarEmVoltar}
        startIcon={<Icon>arrow_back</Icon>}
      >
        Voltar
      </Button>)}

    </Box>

  )
}
