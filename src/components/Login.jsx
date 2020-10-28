import React, { useState, useEffect, Fragment } from 'react';
import style from '../styles/TodoList.module.css'
const Login = (props) => {
   
    let [user, setDescription] = useState('');

    useEffect(() => {
        setDescription(props.user);
      }, [props.user]);

      const changeStatusLocal = (e) => {
       setDescription(e.currentTarget.value);
     };

     const checkUser = () =>{

     
        const  check = user;
        localStorage.setItem('user', check);
      
        props.getUserAC(user)
     }

     const lie = (e) => {
        e.preventDefault();
     }
     
  return (
    <>
    <div className="container w-60 ">
    <div className="text-center  pt-2">
        <h1 className="text-white"> Please enter "Parhosha" user name: </h1>
        <form action="" className="d-flex" onSubmit={lie} >
        <input type="text" className="form-control"  onChange={changeStatusLocal} onSubmit={lie}  />
        <div className="btn w-25 p-1 btn-success" onClick={checkUser}> Press </div> <br/>
        </form>
        </div>
       
    </div>
    </>
  );
};

export default Login;
