// import { async } from 'q';
import React, { useEffect, useState } from 'react'

export default function Input() {

  const [coinsAr, setcoinsAr] = useState([]);
  const [selectFrom, setSelectFrom] = useState({});
  const [selectto, setSelectTo] = useState({});

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    let url = `http://apilayer.net/api/live?access_key=3c81786f9b3d2e267f40d08af97b97f2`
    let resp = await fetch(url);
    let data = await resp.json();
    let tempAr = [];
    for (let key in data.quotes) {
      tempAr.push({ lable: key, value: data.quotes[key] });
    }
    setcoinsAr(tempAr);

  }

  return (
    <div className='mx-auto col-md-6 text-center'>
      <h3>enter amount</h3>
      <input />
      <h3>selct coin type</h3>
      <select>
        {coinsAr.map(item => {
          return (
            <option key={item.lable}>{item.lable}</option>
          )
        })}
      </select>
      <h3>selct coin type to convert</h3>
      <select>
      {coinsAr.map(item => {
          return (
            <option key={item.lable}>{item.lable}</option>
          )
        })}
      </select>
    </div>
  )

}
