import React from 'react'
import { useRef } from 'react'
import "./Storage.css"
const Storage = () => {
    const RandomPass = useRef()
    const Cpass = useRef()

    const ArrowClick = () => {
        //  console.log("work");
        let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        let password = "";
        for (var i = 0; i < 3; i++) {
            let generate = letters[Math.floor(Math.random() * 62)];
            password += generate;
        }
        var val = document.getElementById("input1");
        val.value = password;
    }
    const handleSubmit = () => {
        // console.log(RandomPass.current.value);
        // console.log(Cpass.current.value);

        if ((RandomPass.current.value === "") && (Cpass.current.value === "")) {
            alert("Please Enter Password")
        }
        // else if  {
        //     alert("Please Enter Password")
        // }
        else if (RandomPass.current.value === Cpass.current.value) {
            alert("It is Correct PassWord")
        }
        else {
            alert("Invalid Password")
        }
    }

    const [type, setType] = React.useState("password");
    const [icon, setIcon] = React.useState("fa-solid fa-eye-slash");

    const show=()=>{
        type==="password" ? setType('text') : setType('password');
        icon==="fa-solid fa-eye" 
            ? setIcon("fa-solid fa-eye-slash")
            :setIcon("fa-solid fa-eye");
    }
    
   
    return (
        <div>
            <h1 >Random</h1>
            {/* <form > */}
            <div className='input-div1'>
                <input
                    id='input1'
                    ref={RandomPass} />
                <i className="fa-sharp fa-solid fa-arrow-down" onClick={ArrowClick}></i>
            </div>
            <br />

            <div className='input-div2'>

                <input
                    type={type}
                    id='cpass'
                    ref={Cpass} />
                <i  onClick={show} class={icon}></i>
                {/* <i className="fa-sharp fa-solid fa-eye"></i>               */}
            </div>

            <button onClick={handleSubmit}>Submit</button>

            {/* </form> */}



        </div>
    )
}

export default Storage