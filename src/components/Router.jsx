import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router()
{
    <BrowserRouter>
        <Routes>
            <Route path='/' element='/App'>
                <Route path='/about' element={<h1>О нас</h1>}></Route>
                <Route path='/contacts' element={<h1>Контакты</h1>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default Router;