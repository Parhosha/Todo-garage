import React, { useState, useEffect, Fragment } from 'react';
import style from '../styles/TodoList.module.css'

const AddTub = (props) =>{
    
  let [editMode, setEditMode] = useState(true);
  let [description, setDescription] = useState('');

  useEffect(() => {
    setDescription(props.description);
  }, [props.description]);

  const changeStatusLocal = (e) => {
     console.log(description);
    setDescription(e.currentTarget.value);
  };

 const createNewTab = () =>{
    setEditMode(!editMode);
  props.addNewTab(props.number,props.table_group_id,description);
  setDescription('');
 }
 const visibleMode = () =>{
  setEditMode(!editMode);
 }
 const lie = (e) => {
  e.preventDefault();
}
    return(
        <>
        <Fragment>
          {editMode ? <div className={style.button}  onClick={visibleMode}>+ Add new tab</div> : <>
            
            <div className={style.Tab} onSubmit={lie}> 
              <form className= "d-flex "  >
              <input
                type="text"
                autoFocus={true}
                onChange={changeStatusLocal}
                placeholder=" Start typing here to create task... "
                className="form-control"
                onSubmit={lie}
              />
        <div className="btn w-25 p-1 btn-success" onClick={  createNewTab }>New Tab </div>
      </form>
      </div>
      </>}

      </Fragment>
        </>
    )
}
export default AddTub;