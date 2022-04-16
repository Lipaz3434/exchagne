import React from 'react'
import Input from './input'
import Output from './output'
import Time from './time'

export default function AppExchage() {
  return (
    <div>
      <div className='container px-5'>
        <h1 className='py-2 pb-4 text-center display-1' style={{color: 'teal'}}>Exchage App</h1>
        <div className='pt-5'>
          <Input />
        </div>
          <Output />
        <Time />
      </div>
    </div>
  )
}
