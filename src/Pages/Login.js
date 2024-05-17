import React from 'react'
import { useState } from 'react'

export default function Login() {
    const [emailInput , setEmail] = useState("");
    const [passwordInput , setPassword]= useState("");
  return (
    <form onSubmit={(event) => {
        event.preventDefault()

    }}>
        <label>Enter your Email :  </label>
        <input value={emailInput} onChange={(event) => {setEmail(event.target.value)}} />
    <hr></hr>
    <label>Enter your password : </label>
    <input value={passwordInput} onChange={(event) => {setPassword(event.target.value)}} />
    <hr></hr>
    <button>Submit</button>
    </form>
  )
}
