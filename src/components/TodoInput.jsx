import React, { useState, useEffect, Fragment } from 'react';
import style from '../styles/TodoList.module.css'

const TodoInput = (props) =>{

  let [description, setDescription] = useState('');

  useEffect(() => {
    setDescription(props.description);
  }, [props.description]);

  const changeStatusLocal = (e) => {
     console.log(description);
    setDescription(e.currentTarget.value);
  };

  const changeModeOffSwitch = () => {
    if(description != '')
    props.addnewToDo(description,props.id);
    setDescription('');
    console.log(description);
  }
  const deleteTab = () => {
    props.deleteTab(props.id);
  }


    return(<div className = { style.Input}>
        <Fragment>
          
           <div className={style.head}><h4 className="text-left ">{props.name} </h4><h4 onClick={deleteTab}>X</h4></div>
         
              <form className="d-flex " >
              <input
                type="text"
                autoFocus={true}
                onChange={changeStatusLocal}
                placeholder=" Start typing here to create task... "

                className="form-control"
               
              />
              <div className="btn w-25 p-1 btn-success"   onClick={ changeModeOffSwitch}>Add Task</div>
              </form>

      </Fragment>

    </div>)
}
export default TodoInput;

