// import { async } from 'q';
// import React, { useEffect, useRef, useState } from 'react'

import { useContext } from "react"
import { AppContext } from "../context/context"
import Select from "react-select"
import {BsArrowLeftRight} from "react-icons/bs"

export default function Input() {

  const {option,val1,setVal1,val2,setVal2,input,setInput} = useContext(AppContext)

  return (
    <div className='text-center mt-5'>
        <input onChange={(event) => {console.log(+event.target.value); setInput(+event.target.value)}} defaultValue={input} type="number" className="col-md-5 rounded-pill p-2" /> 

      <div className='d-flex pt-5 justify-content-center'>
        <div className='pe-5'>
          <Select onChange={item => setVal1(item)}  value={val1} options={option} className='fs-3'></Select>
        </div>
        <BsArrowLeftRight onClick={() => {setVal1(val2); setVal2(val1)}} style={{fontSize:'5em',cursor:'pointer'}}/>
        <div className='ps-5'>
          <Select onChange={item => setVal2(item)} value={val2} options={option} className='fs-3'></Select>
        </div>
      </div>
    </div>
  )

}

