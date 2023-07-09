import React, { Suspense, useContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from 'app/providers/router';


export const App = () => {    
    const {theme, toggleTheme} = useTheme();
    return(
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О нас</Link>
            <AppRouter />     
        </div>
    )
}