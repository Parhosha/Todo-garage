import React, { useState, useEffect } from 'react';
import style from '../styles/TodoList.module.css';
// ERR Отредактировал/ Оставил поле статуса без изменений/ переместил/ пустое поле
//проблемы с редактированием и последующем перемещением - новые свойства не сохранаются 
const TodoList = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.lists);
  let [date, setDate] = useState(props.date);
  let [done, setDone] = useState(props.done);
 let a = new Date(date)
 let today = new Date();
 let todayb = today.getDate()+ '' + today.getMonth()+ '' +today.getFullYear();
 let b = a.getDate()+ '' + a.getMonth()+ '' +a.getFullYear();

  useEffect(() => {
    setStatus(props.status);
    setDate(props.date);
    setDone(props.done);
  }, [props.status,props.date,props.done]);

  const changeStatusLocal = (e) => {
    setStatus(e.currentTarget.value);
  };

  const changeDateLocal = (e) => {
    setDate(e.currentTarget.value);
  };

  const changeDoneLocal = (e) => {
    console.log(!done)
    setDone(!done);
  };

  const changeModeOffSwitch = () => {
    setEditMode(false);
    props.updToDo(status? status:props.lists, props.id, done, date);
    setStatus(status);

    
  };

  const changeModeOnSwitch = () => {
    setEditMode(true);
  };
  const deletePost = () => {
    props.deletePost(props.id);
  };
  const movePriority =  (direction) => {
    props.movePriority(direction ? -1 : 1, props.id, props.user_id);
  };
  const lie = (e) => {
    e.preventDefault();
 }

  return (
    <>
      <div className={style.wrap} id={todayb==b? style.red:style.empty}>
      
        {editMode ? (
         
          <>
            <div className={style.blockChange}>
            
            
            <div className={style.change}>
              <p>Put changes here:</p>
              
              <input
                type="text"
                autoFocus={true}
                onChange={changeStatusLocal}
                placeholder={props.lists}
                value={status}
              />
              </div>
              <div className={style.change}>
              <p>Date of deadline:</p>
              <input type="date" onChange ={ changeDateLocal } placeholder={props.date} value={props.date}/>
              </div>
              <div className={style.change}>
              <p>Done:</p>
              <input type="checkbox" onChange ={ changeDoneLocal } checked={done ? 'checked' : ''}/>
              
              </div>
             
            </div>
            
          </>
        ) : (
          <>
            <div className={style.block } > 
              <input type="checkbox"  checked={done ?  'checked':''}  readOnly="readonly"/>
              <p>{status ? status : props.lists}</p>
            </div>
          </>
        )}
        {editMode ? (
          <div className={style.save}>
            {' '}
            <pre onClick={changeModeOffSwitch} >Сохранить</pre>
          </div>
        ) : (
          <>
            <div className={style.block} >
              <pre className="" onClick={changeModeOnSwitch}></pre>
            </div>
            <div className={style.block}>
              <pre className="" onClick={deletePost}>
                {' '}
              </pre>
            </div>
            <div className={style.block}>
              <pre onClick={() => movePriority(1)}> </pre>
              <pre onClick={() => movePriority(0)}></pre>
            </div>
          </>
        )}
       
      </div>
    </>
  );
};
export default TodoList;
