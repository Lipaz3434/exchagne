import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react'
import PageNotFound404 from './comps/pageNotFound404';
import AppExchage from './comps/appExchage';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route>
                    <Route path='*' element={<PageNotFound404/>}/>
                    <Route index element={<AppExchage/>}/>
                </Route>
            </Routes>
        </Router>
    )
}
