import React, { useEffect, useState } from 'react'

export default function Time() {
    const [time, setTime] = useState([]);

    useEffect(() => {
        setInterval(() => {
            setTime([new Date().toLocaleTimeString(), new Date().toLocaleDateString()])
        }, 1000);
    }, [])

    return (
        <div className='mt-5'>
            <h4>Date - {time[1]} {new Date().toDateString()}</h4>
            <h4>Time - {time[0]}</h4>
        </div>
    )
}