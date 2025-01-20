import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import "../reponsive/login.css"
export const Login = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        "email": "",
        "password": ""
    })
   
    const inputHandler = (event) => {
        setInputValue({...inputValue, [event.target.name]: event.target.value});
    }
    const loginUser = async (event) => {
        event.preventDefault();
        // state---------backend
        let res = await axios.post('http://localhost:4000/login', inputValue);
        if(res.data.success == true){
            alert(res.data.message)
            navigate('/home');
        } else {
            alert("Invalid user")
            navigate('/login');
        }
        setInputValue({
            "email": "",
            "password": ""
        })
    }
    
  return (
    <>
        <section id='login-section'>
            <div className='container-fluid'>
                <div className='login-form'>
                    <h4>Login Pannel</h4>
                    <form action="" method='post' onSubmit={loginUser}>
                        <div className='form-group '>
                            <input type="email" className='input-field' name='email' onChange={inputHandler} value={inputValue.email} placeholder='enter email' />
                        </div>
                        <div className='form-group '>
                            <input type="password" className='input-field' name='password' placeholder='enter password' onChange={inputHandler} value={inputValue.password} />
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-danger p-2 ' >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
      
    </>
  )
}
