import React from 'react'
import { useRef } from 'react'
import Dash from "./Dash";


const Local = () => {

  const [value, setvalue] = React.useState()
  const [value2, setvalue2] = React.useState()

  const input_email = useRef();
  const input_pass = useRef();

  // Form Submit
  const handleSubmit = () => {

    if ((input_email.current.value === "admin@gmail.com" && input_pass.current.value === "12345")) {
      localStorage.setItem("EmailID", "admin@gmail.com")
      localStorage.setItem("Password", "12345")
    }
    else {
      alert("invalid Mail Id and Password Please ReEnter ")
    }
  }

  const getMail = localStorage.getItem("EmailID");
  const getPass = localStorage.getItem("Password");

  // Show Password
  const MyFunction = () => {
    let psw = document.getElementById("pass");

    if (psw.type === "password") {
      psw.type = "text"
    }
    else {
      psw.type = "password"
    }
  }

  const handleChange = () => {
    setvalue(input_email.current.value)
    setvalue2(input_pass.current.value)
  }

  const PwdClick = () => {
    let MyInput = document.getElementById("pass").value;

    if (MyInput === "") {
      document.getElementById("passEr").innerHTML = "Please enter Password"
    }
    else {
      document.getElementById("passEr").innerHTML = ""
    }
  }

  const noBack = () => {
    window.history.forward()
  }
  noBack();
  window.onload = noBack;
  window.onpageshow = function (event) { if (event.persisted) noBack() }
  window.onunload = function () { void (0) }

  return (
    <div className='body' >

      {getMail && getPass ? <Dash /> :

        <div className='form-div'>
          <form onSubmit={handleSubmit} className="form-control">
            <h1>Login</h1><br />

            <div >
              <label className="form-lable">Email:</label>
              <input ref={input_email}
                className="input1 form-control"
                id='email'
                type="email"
                placeholder=" Sample@gamil.com"
                value={value}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <span className="form__error">Invalid Mail Id</span>
            </div>
            <div id='mailEr'></div>

            <div>
              <lable className="form-lable">Password:</lable>
              <input ref={input_pass}
                type="password"
                className='input1 form-control'
                id="pass"
                placeholder="Password"
                value={value2}
                onChange={handleChange}
                autoComplete="off"
                onClick={PwdClick}
                required
              /><br />

              <span className='form__error'></span>
              <div id="passEr" ></div>
            </div>

            <div>
              <input type="checkbox" id="checkbox" onClick={MyFunction} />&nbsp;&nbsp;
              <label for="">show password</label>
            </div><br />

            <input type="submit" value="Login" id="submitbtn" className='btn btn-outline-primary mb-3 btn1' onClick={noBack} disabled={(!value) && (!value2)} />

          </form>
        </div>
      }
    </div>
  )
}

export default Local;
