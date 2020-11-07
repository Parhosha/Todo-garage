import React, { Fragment } from 'react';
import Main from './components/Main';
import { connect } from 'react-redux';
import { deletePost, postDescAC, updToDoAC, movePriorityAC,getUserAC,addNewTabAC,deleteTab,updNameToDoAC } from './reducers/Main-reducer';
import Login from './components/Login';
import style from './styles/TodoList.module.css';

class App extends React.Component {
  componentDidMount() {

    const userRemember = localStorage.getItem('user')
    if(userRemember)
    this.props.getUserAC(userRemember)
    
    console.log(this.props);
    
  }
  render() {
    return (
      <div className={style.Content}>
        {this.props.name? <Main
        list={this.props.list}
        postDescAC={this.props.postDescAC}
        deletePost={this.props.deletePost}
        updToDo={this.props.updToDoAC}
        movePriorityAC={this.props.movePriorityAC}
        name = { this.props.name}
        author = {this.props.author}
        addNewTab = {this.props.addNewTabAC}
        deleteTab = {this.props.deleteTab}
        updNameToDoAC = {this.props.updNameToDoAC}
      /> : <Login getUserAC = {this.props.getUserAC} preload = {this.props.load}/> }
        
       
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  list: state.mainPage.toDoList,
  name: state.mainPage.todoName,
  author: state.mainPage.user,
  load: state.mainPage.preloader
});

export default connect(mapStateToProps, {
  deleteTab,
  deletePost,
  postDescAC,
  updToDoAC,
  movePriorityAC,
  getUserAC,
  addNewTabAC,
  updNameToDoAC
})(App);
