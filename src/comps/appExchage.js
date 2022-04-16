import React from 'react'
import Input from './input'
import Output from './output'
import Time from './time'

export default function AppExchage() {
  return (
    <>
      <div className='container px-5'>
        <h1 className='display-1 py-2 pb-4 text-center'>Exchage App</h1>
        <div className='d-flex justify-content-between'>
        <div>
          <Input />
        </div>
        <div className='mt-5 pt-5'>
          <Output />
        </div>
        </div>
        <Time />
      </div>
    </>
  )
}
