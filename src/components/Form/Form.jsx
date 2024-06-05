import React, { useEffect, useState } from 'react';
import './Form.css';  // Import the CSS file

const Form = () => {

    const data = {
        name: "",
        number: "",
        email: "",
        password: ""
    };

    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false)
    useEffect(()=>{
        console.log("Registered")
    },[flag])


    function handleData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
        console.log(inputData);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.number || !inputData.email || !inputData.password){
            alert("All Fields are Mandatory")
        }
        else{
            setFlag(true)
        }
    }

    return (
        <div className='main-1234'>
        <div>{(flag)?<h2 className='ui-1'>Hello {inputData.name}, You Have Registered Successfully</h2>:""}</div>
        <form className='container' onSubmit={handleSubmit}>
            <div className='header'>
                <h1>Basic Registration Form</h1>
            </div>

            <div className='form-group'>
                <input type='text' placeholder='Enter Your Full Name' name="name" value={inputData.name} onChange={handleData} className='form-input'/>
            </div>

            <div className='form-group'>
                <input type='text' placeholder='Enter Your Phone No.' name="number" value={inputData.number} onChange={handleData} className='form-input'/>
            </div>

            <div className='form-group'>
                <input type='text' placeholder='Enter Your E-Mail' name="email" value={inputData.email} onChange={handleData} className='form-input'/>
            </div>

            <div className='form-group'>
                <input type='password' placeholder='Enter Your Password' name="password" value={inputData.password} onChange={handleData} className='form-input'/>
            </div>

            <div className='form-group'>
                <button type='submit' className='form-button'>Submit</button>
            </div>
        </form>
        </div>
    );
};

export default Form;
