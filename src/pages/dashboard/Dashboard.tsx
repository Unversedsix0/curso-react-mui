import React from 'react'
import { BarraDeFerramentas } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layout'

export const Dashboard = () => {
    return (

        <LayoutBaseDePagina
        titulo='Pagina Inicial'
        barraDeFerramentas={(<BarraDeFerramentas/>)}
        
        >Testando</LayoutBaseDePagina>


    )
}
