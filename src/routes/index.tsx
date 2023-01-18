import { Routes, Route, Navigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import {  useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

export const AppRoutes = () =>{
    const { toggleDrawerOpen , setDrawerOptions} = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                label:'Pagina Inicial',
                icon:'home',
                path:'/pagina-inicial',
                key: 'pagina-inicial'
            },
       
           
        ])
    }, [])
    
    return(
        <Routes>
            <Route path='/pagina-inicial' element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}> toggleDrawer</Button>}/>

            {/*<Route path='*' element={<Navigate to={'/pagina-inicial'}/>}/>*/}
        </Routes>

    );
}