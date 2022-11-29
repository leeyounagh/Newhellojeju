import {useDispatch} from 'react-redux'
import { registerUser } from '../../_actions/User_action';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss'


const RegisterPage = (props) => {
    const dispatch =useDispatch()
    const NaviGate = useNavigate()
     const [Email,setEmail] =useState("")
     const [Password,setPassword] =useState("")
     const [Name,setName] =useState("")
     const [confirmPassword,setconfirmPassword] =useState("")
   
     const onEmailHandler = (event) =>{
         setEmail(event.currentTarget.value)
     }
     const onPasswordHandler = (event) =>{
         setPassword(event.currentTarget.value)
     }
     const onNameHandler = (event) =>{
        setName(event.currentTarget.value)
    }
   
    const onConfimPasswordHandler = (event) =>{
        setconfirmPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== confirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            email: Email,
            password: Password,
            name: Name
        }
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    NaviGate('/login')
                } else {
                    alert("Failed to sign up")
                }
            })
    }

 
      

    return (
        <div className='regi_font' style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh',position:'relative',
            left:"0px",background:"#dcf0fa"
        }}>
            <form style={{display:'flex',flexDirection:'column',
            position:'relative',left:"450px",top:'-20px'}}
            onSubmit={onSubmitHandler}>
                <label style={{zIndex:"50"}}>Email</label>
                <input style={{zIndex:"50",borderRadius:"50px",border:'none',marginLeft:"5px"}} type="email" value={Email} onChange={onEmailHandler}/>
                
                <label style={{zIndex:"50"}}>Name</label>
                <input style={{zIndex:"50",borderRadius:"50px",border:'none',marginLeft:"5px"}} type="text" value={Name} onChange={onNameHandler}/>

                <label style={{zIndex:"50"}}>Password</label>
                <input style={{zIndex:"50",borderRadius:"50px",border:'none',marginLeft:"5px"}} type="password" value={Password} onChange={onPasswordHandler}/>

                <label style={{zIndex:"50"}}>Confirm Password</label>
                <input style={{zIndex:"50",borderRadius:"50px",border:'none',marginLeft:"5px"}} type="password" value={confirmPassword} onChange={onConfimPasswordHandler}/>
                <br/>
                <button style={{zIndex:"50",borderRadius:"50px",border:'none',
                width:"100px",position:"relative",left:"60px",
                background:"white"}} type='submit'>
                    회원가입
                </button>
            </form>
       

            <div style={{position:'relative',left:'50px'}}class="spring" role="img" aria-label="Animated cartoon showing a sunny scene with a field with flowers and a flying bee."></div>

            </div>
        
    );
};

export default RegisterPage;
