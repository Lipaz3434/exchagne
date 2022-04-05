import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react'
import Layout from './comps/layout';

import PageNotFound404 from './comps/pageNotFound404';
import AppExchange from './comps/appExchange';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<AppExchange />} />
                    <Route path='*' element={<PageNotFound404 />} />
                    <Route index element={<AppExchange />} />

                </Route>
            </Routes>
        </Router>
    )
}
