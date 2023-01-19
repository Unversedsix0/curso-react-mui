import React from 'react'
import { FerramentasDaListagem } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layout'

export const Dashboard = () => {
    return (

        <LayoutBaseDePagina
        titulo='Pagina Inicial'
        barraDeFerramentas={(<FerramentasDaListagem
        mostrarInputBusca
        textoBotaoNovo='Nova'
        />)}
        
        >Testando</LayoutBaseDePagina>


    )
}
