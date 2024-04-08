import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { Feedback } from '../Selectors/Feedback';
import { Assignment } from '../Atoms/Assignment';
import '../App.css'
export default function AssignDisplay() {
    const [data,setData]=useRecoilState(Assignment)
    const feedback=useRecoilValue(Feedback);
    const [val, setVal] = useState('');
    function handleChange(event) {
        setVal(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        setData({
             val: parseInt(val, 10)
        });
    }
  return (
    <div className='container'>
        <h1>Hi User !</h1>
        <form onSubmit={handleSubmit}>
      <input className='inp' type='text' placeholder='Enter Your Username'/><br/><br/>
      <input className='inp1' type='number' placeholder='Enter No. Of Pending Assignments' value={val} onChange={handleChange}/><br/><br/>
      <button className='btn' >Get Your Feedback</button>
      </form>
      <h1>Your Feedback : {feedback}</h1>
    </div>
  )
}
