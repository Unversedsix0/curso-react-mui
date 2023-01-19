import React from 'react'
import {  FerramentasDeDetalhe } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layout'

export const Dashboard = () => {
    return (

        <LayoutBaseDePagina
        titulo='Pagina Inicial'
        barraDeFerramentas={(<FerramentasDeDetalhe/>)}
        
        >Testando</LayoutBaseDePagina>


    )
}
