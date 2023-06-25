import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutePage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

export const App = () => {
    return(
        <div className='app'>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О нас</Link>
           
            <Suspense fallback={<div>Loading</div>}>
                <Routes >
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                    <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>                
           
        </div>
    )
}