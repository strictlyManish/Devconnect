import React from 'react'

function Register() {
  return (
    <div className='flex'>
      <div>
        <div>
          <h1>Welcome Connections</h1>
          <p className='font-serif'>Please Enter your Details</p>
        </div>
        <form>
          <label htmlFor="username">username</label>
          <input type="text" placeholder='username' id='username' />
          <label htmlFor="username">username</label>
          <input type="email" placeholder='en' />
        </form>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Register