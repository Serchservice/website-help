import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './style.css'
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './api/ScrollToTop';
import Home from './views/home/Home';
import Links from './config/Links';
import CategoryPage from './views/category/CategoryPage';
import Category from './views/category/Category';
import Search from './views/search/Search';
import SectionPage from './views/section/SectionPage';
import Section from './views/section/states/Section';
import Help from './views/section/help/Help';
import Error from './views/error/Error';

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route element={ <Error /> } path="*" />
                    <Route element={ <Home /> } exact path={ Links.home } />
                    <Route element={ <Search /> } path={ Links.search } />
                    <Route path={ Links.category } element={ <CategoryPage /> }>
                        <Route index element={ <Category /> }/>
                        <Route path={ Links.section } element={ <SectionPage /> }>
                            <Route index element={ <Section /> }/>
                            <Route path={ Links.faq } element={ <Help /> } />
                        </Route>
                    </Route>
                </Routes>
            </ScrollToTop>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <App />
);
reportWebVitals();