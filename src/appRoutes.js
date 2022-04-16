import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { useEffect, useState } from 'react'
import PageNotFound404 from './comps/pageNotFound404';
import AppExchage from './comps/appExchage';
import { AppContext } from './context/context';





export default function AppRoutes() {
    const [option, setOption] = useState([]);
    const [val1, setVal1] = useState({});
    const [val2, setVal2] = useState({});
    const [input, setInput] = useState(1);

    useEffect(() => {
        doApi();
      }, [])
    
      const doApi = async () => {
        let url = `money.json`
        let resp = await fetch(url);
        let data = await resp.json();
        let tempAr = [];
        console.log(data.quotes);
        for (let key in data.quotes) {
          tempAr.push({ label: key.slice(3), value: data.quotes[key] });
        }
        console.log(tempAr)
        setOption(tempAr);

        let usd = tempAr[0];
        let ils = tempAr[1];
        setVal1(usd);
        setVal2(ils);

        console.log(val1);
        console.log(val2);
      }

    return (
        <BrowserRouter>
            <AppContext.Provider value={{
                option,
                val1,setVal1,
                val2,setVal2,
                input,setInput
            }}>
                <Routes>
                    <Route index element={<AppExchage />} />
                    <Route path='*' element={<PageNotFound404 />} />
                </Routes>
            </AppContext.Provider>
        </BrowserRouter>
    )
}
