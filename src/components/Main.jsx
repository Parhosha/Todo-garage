import React, { Fragment } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import AddTub from './AddTub';
import style from '../styles/TodoList.module.css'

const Main = (props) => {
console.log(props)
  
  const move = (des, id, user_id) => {

   

    let newTodo = props.list.filter(function (e) {
      return e.user_id == user_id;
    });
    let SecondPart = props.list.filter(function (e) {
      return e.user_id != user_id;
    });
    

    for (let a in newTodo) {
    
     
        if (newTodo[a].todo_id == id && newTodo[+a + des].user_id ) {
      
        let tmp = newTodo[+a + des].description;
        newTodo[+a + des].description = newTodo[a].description;
        newTodo[a].description = tmp;

         tmp = newTodo[+a + des].date;
        newTodo[+a + des].date = newTodo[a].date;
        newTodo[a].date = tmp;

         tmp = newTodo[+a + des].done;
        newTodo[+a + des].done = newTodo[a].done;
        newTodo[a].done = tmp;
        
        }
    }
    newTodo.push(...SecondPart)

  props.movePriorityAC(newTodo);
   
  };

  return (
    <>
        <Fragment>
        <div className="container w-50 ">
        
        {
          props.name.map((n,index) => (
           < div key={index + n.name} className={style.Tab}>
            <TodoInput addnewToDo={props.postDescAC} name={n.name} id={n.id} deleteTab={props.deleteTab} updNameToDoAC={props.updNameToDoAC} />
  
            { props.list.map((p, key) => (
              
              p.user_id ==  n.id  ?
              <TodoList
              lists={p.description}
              id={p.todo_id}
              user_id={p.user_id}
              deletePost={props.deletePost}
              updToDo={props.updToDo}
              movePriority={move}
              key={key+ p.description}
              date = {p.date}
              done = {p.done}
             />
              : console.log()
            ))}
            </div>
          ))
        }
          <AddTub addNewTab ={props.addNewTab} number = {props.name.length + 1} table_group_id = {props.author.id} />
          </div>
      </Fragment>
    </>
  );
};

export default Main;
