import React, { useContext } from 'react'
import { AppContext } from '../context/context'

export default function Output() {
    const {val1,val2,input} = useContext(AppContext);

    return (
        <div className='mt-4 text-center'>
            <h1>{input.toLocaleString()} {val1.label} = {(input/val1.value * val2.value).toLocaleString()} {val2.label}</h1>
        </div>
    )
} 
