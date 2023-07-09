import React, { Suspense, useContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutePage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';

export const App = () => {    
    const {theme, toggleTheme} = useTheme();
    return(
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle</button>
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