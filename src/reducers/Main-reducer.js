import API from "../api/api";

const TXT_ADD = 'TXT_ADD';
const DELETE = 'DELETE';
const NEW_TEXT = 'NEW_TEXT'
const UPD_TEXT = 'UPD_TEXT';
const PRIORITY = 'PRIORITY';
const ADD_USER = 'ADD_USER';
const TODO_NAME = 'TODO_NAME';
const ADD_TAB = 'ADD_TAB';
const DEL_TAB = 'DEL_TAB';

let initReducer = {
  toDoList: [],
  todoName:null,
  user:null,
  id:null,
  auth:0

};

const MainReducer = (state = initReducer, action) => {
  switch (action.type) {

    case ADD_USER:{
     
      return {
        ...state,
        user:action.user,
        auth:1
      }
    }
    case TODO_NAME:{
      return{
        ...state,
        todoName: action.name
      }
    }

    case TXT_ADD: {

      return {

        ...state,
        toDoList: action.text,
      };
    }
    case ADD_TAB:{
      return{
        ...state,
        todoName: [...state.todoName, {
          
          name: action.name,user_id:action.group_id, id:action.id
        }]
      }
    }
    case DELETE: {

      const newList = state.toDoList.filter(function (e) {
        return e.todo_id != action.id;
      })
      console.log(action.id)
      console.log(newList)
      return {
        ...state,
        toDoList: newList,
      }
    }
    case DEL_TAB:{
      const newList = state.todoName.filter(function (e) {
        return e.id != action.id;
      })
      console.log(newList)
      
      return {
        ...state,
        todoName: newList,
      }
    }

    case NEW_TEXT: {

      return {
        ...state,
        toDoList: [...state.toDoList, ... action.obj]
      };
    }

    case UPD_TEXT: {

      for (let a in state.toDoList) {
        if (state.toDoList[a].todo_id == action.id) {

          state.toDoList[a].description = action.text
          state.toDoList[a].done = action.done
          state.toDoList[a].date = action.date
        }
      }
console.log(state.toDoList)
      return {
        ...state,
        toDoList: state.toDoList
      };
    }

    case PRIORITY: {

      console.log(action.newTodo)
      const newList = action.newTodo
      return {
        ...state,
        toDoList: newList,
        
      }
    }

    default:
      return state;
  }
};


export const getAction = (text) => ({
  type: TXT_ADD,
  text,
});
export const getUser = (user)=>({
   type: ADD_USER,
   user
})
export const deleteId = (id) => ({
  type: DELETE,
  id
})
export const postDesc = (obj) => ({
  type: NEW_TEXT,
  obj
})
export const updToDo = (text, id,done,date) => ({
  type: UPD_TEXT,
  text,
  id,
  done,
  date
})
export const movePriority = (newTodo) => ({
  type: PRIORITY,
  newTodo

})
export const todoName = (name) =>({
  type:TODO_NAME,
  name
})
export const addNewTab = (id,group_id,name) =>({
  type:ADD_TAB,
  id,
  group_id,
  name
})
export const deleteTableId = (id) =>({
  type:DEL_TAB,
  id
})
//FIX MOVE ELLEMENTS

export const getUserAC = (user) => {
  
    return async (dispatch) => {
      const resp = await API.getUser(user);
      //при гете поле даты берется не верно???
      //попробовать удалить колонку и поменять в ней тип на тот же текст
      if(resp.data.rowCount){
      //  console.log(resp.data.rows[0])

        dispatch(getUser(resp.data.rows[0]))
        const respTodos = await API.getTodos(resp.data.rows[0].id)
        // console.log(respTodos.data.rows)
        dispatch(todoName( respTodos.data.rows));
  
        const respTodo = await API.get();
        //console.log(respTodo.data)
        dispatch(getAction(respTodo.data));
        //getAC(respTodos.data.rows[0].id)
      }else{
        alert('Wrong User!')
      }
     
  }
  
}

export const deletePost = (id) => {
  console.log(id)
  return (dispatch) => {
    API.deleteId(id);
    dispatch(deleteId(id))
  }
}

export const deleteTab = (id) => {
  console.log(id)
  return (dispatch) => {
    API.deleteTableId(id);
    dispatch(deleteTableId(id))
  }
}


export const addNewTabAC = (number,table_group_id,description) => {
  //console.log(number+ '  ' + table_group_id+' '+description)
  return (dispatch) => {
    API.addNewTab(number,table_group_id,description);
    dispatch(addNewTab(number,table_group_id,description))
  }

}
export const postDescAC = (description,id) => {

  return async (dispatch) => {
    const resp = await  API.postDesc(description,id);
    console.log(resp.rows)
    dispatch(postDesc(resp.rows))
  }

}

export const updToDoAC = (description, id,done,date) => {

  console.log(description, id,done,date)
  return (dispatch) => {
    API.updDesc(description, id,done,date);
    dispatch(updToDo(description, id,done,date))
  }

}

export const movePriorityAC = (newTodo) => {

      console.log(newTodo)
  return async (dispatch) => {
    dispatch(movePriority(newTodo))

  for(let a in newTodo){
  
    await API.updDesc(newTodo[a].description , newTodo[a].todo_id,newTodo[a].done,newTodo[a].date);
  }
  //window.location.reload(false);
    //  dispatch((description,id)) 
  }

}


export default MainReducer;