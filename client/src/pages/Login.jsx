import React from 'react'

export default function Login() {

  const LoginUser = (e) => {
    e.preventDefault ()
  }

  return (
    <div>
      <form onSubmit={LoginUser}>
      <label>Email</label>
        <input type='email' placeholder='enter email...' />
        <label>Password</label>
        <input type='password' placeholder='enter password...' />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}