import React, { useState, useEffect, Fragment } from 'react';
import style from '../styles/TodoList.module.css'

const TodoInput = (props) =>{

  let [editMode, setEditMode] = useState(false);
  let [name, setName] = useState('');
  let [description, setDescription] = useState('');

  useEffect(() => {
    setDescription(props.description);
    setName(props.name);
  }, [props.description,props.name]);

  const changeStatusLocal = (e) => {
     console.log(description);
    setDescription(e.currentTarget.value);
  };
  const changeNameLocal = (e) => {
    
    setName(e.currentTarget.value);
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
  const lie = (e) => {
    e.preventDefault();
 }
 const edit = () =>{
   if(editMode){
    props.updNameToDoAC(name, props.id)
   }
   setEditMode(!editMode)
   
 }

    return(<div className = { style.Input}>
        <Fragment>
          
    <div className={style.head}>
      {
        !editMode? (
        <>
        <h4 className="text-left ">{name ? name : props.name} </h4>
        <h4 onClick={edit} alt=""/>
        <h4 onClick={deleteTab}>X</h4>
        </>
        ) : (
          <form className="d-flex "   onSubmit={lie}  >
          <input
            type="text"
            autoFocus={true}
            onChange={changeNameLocal}
            placeholder=" Start typing here to change name of Task "
            className="form-control"
            onSubmit={lie}
           
          />
          <div className="btn w-25 p-1 btn-success"   onClick={edit} >Save</div>
          </form>
        )
      }
      
      
    </div> {/*edited img added*/}
         
              <form className="d-flex " onSubmit={lie}  >
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

