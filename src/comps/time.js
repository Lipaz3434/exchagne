import React, { useEffect, useState } from 'react'

export default function Time() {
    const [time, setTime] = useState([]);

    useEffect(() => {
        setInterval(() => {
            setTime([new Date().toLocaleTimeString(), new Date().toLocaleDateString()])
        }, 1000);
    }, [])

    return (
        <div className='text-end'>
            <h3>Date - {time[1]} {new Date().toDateString()}</h3>
            <h3>Time - {time[0]}</h3>
        </div>
    )
}