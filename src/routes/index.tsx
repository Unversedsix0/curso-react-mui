import { Routes, Route, Navigate } from 'react-router-dom';
import Button from '@mui/material/Button'

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path='/pagina-inicial' element={<Button variant="contained" color="primary">TESTE</Button>}/>

            <Route path='*' element={<Navigate to={'/pagina-inicial'}/>}/>
        </Routes>

    );
}