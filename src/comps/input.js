// import { async } from 'q';
import React, { useEffect, useRef, useState } from 'react'

export default function Input() {


  const [coinsAr, setcoinsAr] = useState([]);
  const [selectFrom, setSelectFrom] = useState({});
  const [selectto, setSelectTo] = useState({});

  const sFromRef = useRef()
  const stoRef = useRef()

  useEffect(() => {
    doApi();
    console.log(selectFrom)
    console.log(selectto)
  }, [])

  const doApi = async () => {
    let url = `money.json`
    let resp = await fetch(url);
    let data = await resp.json();
    let tempAr = [];
    console.log(data.quotes);
    for (let key in data.quotes) {
      tempAr.push({ lable: key.slice(3), value: data.quotes[key] });
    }
    console.log(tempAr)
    setcoinsAr(tempAr);
  }



  return (
    <div className='text-center py-5'>
      <div className='pe-5'>
        <h3>enter amount</h3>
        <input />
      </div>
      <div className='d-flex pt-5'>
        <div className='pe-5'>
          <h4>selct coin type</h4>
          <select  ref={sFromRef}  onChange={()=>{setSelectFrom(sFromRef)}} defaultValue={selectFrom} className='fs-3'>
            {coinsAr.map(item => {
              return (
                <option value={item.value} key={item.lable}>{item.lable}</option>
              )
            })}
          </select>
        </div>
        <div className='ps-5'>
          <h4>selct coin type to convert</h4>
          <select ref={stoRef} onChange={()=>{setSelectTo(stoRef)}} className='fs-3'>
            {coinsAr.map(item => {
              return (
                <option  value={item.value} key={item.lable}>{item.lable}</option>
              )
            })}
          </select>
        </div>
      </div>
      <div className='me-5 mt-5'>
     <button onClick={()=>{setSelectTo(selectto); setSelectFrom(selectFrom);}} className='btn btn-outline-secondary px-4 me-4'>change</button>
     </div>
    </div>
  )

}

