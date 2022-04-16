// import { async } from 'q';
// import React, { useEffect, useRef, useState } from 'react'

import { useContext } from "react"
import { AppContext } from "../context/context"
import Select from "react-select"
import {BsArrowLeftRight} from "react-icons/bs"

export default function Input() {

  const {option,val1,setVal1,val2,setVal2,input,setInput} = useContext(AppContext)

  return (
    <div className='text-center py-5'>
      <div className='pe-5'>
        <h3>enter amount</h3>
        <input onChange={(event) => {console.log(+event.target.value); setInput(+event.target.value)}} defaultValue={input} type="number" className="form-control" /> 
      </div>
      <div className='d-flex pt-5'>
        <div className='pe-5'>
          <h4>selct coin type</h4>
          <Select onChange={item => setVal1(item)}  value={val1} options={option} className='col-md-9 text-center'></Select>
        </div>
        <div className='ps-5'>
          <h4>selct coin type to convert</h4>
          <Select onChange={item => setVal2(item)} value={val2} options={option} className='col-md-5 text-center'></Select>
        </div>
      </div>
      <div className='me-5 mt-5'>
     {/* <button onClick={()=>{}} className='btn btn-outline-secondary px-4 me-4'>change</button> */}
    
   <BsArrowLeftRight onClick={() => {setVal1(val2); setVal2(val1)}} style={{fontSize:'2em',cursor:'pointer'}}/>
     </div>
    </div>
  )

}

