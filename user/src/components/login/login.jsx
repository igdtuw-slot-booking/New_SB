import React from 'react'

export default function login({ type }) {
    let data;

    switch(type) {
        case "admin":
            data = {
                text: "Are you a student?",
                logintext: "Student Login",
                hellotext: "Hello Admin"
            };
            break;
        case "student":
            data = {
                text: "Are you a admin?",
                logintext: "Admin Login",
                hellotext: "Hello Student"
            };
            break;
        default:
            break;
    }

  return (
    <div>
      <div>
        <h5 classname='text'>{data.text}</h5>
        <h3 classname='logintext'>{data.logintext}</h3>
      </div>
      <div>
        <forms>
          <h2 className='hellotext'>{data.hellotext}</h2>
          <input type={"email"} placeholder="Email" className='email'></input>
          <input type={"password"} placeholder="password" classname='password'></input>
          <button classname='loginbutton'> Login </button>
        </forms>
      </div>
    </div>
  )
}
