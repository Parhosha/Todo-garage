const axios = require('axios');

const API = {
    get() {
        
        return axios
            .get('http://localhost:3000/todos' )
            .then((response) => {
                return response
            })

    },
    getUser(user){
        
        return axios
        .post('http://localhost:3000/users',
        {
            user
        })
        .then((response) => {
            return response 
        })
    },
    getTodos(id){
        //alert(id)
        return axios
        .get('http://localhost:3000/todoList/' + id)
        .then((response) => {
            return response 
        })
    },
    deleteId(id) {

        return axios.delete('http://localhost:3000/todos/' + id)
            .then((response) => {
                return response
            })
    },
    deleteTableId(id) {

        return axios.delete('http://localhost:3000/todoList/' + id )
            .then((response) => {
                return response
            })
    },
    addNewTab(number,table_group_id,description){
        
        return axios.post('http://localhost:3000/todoList', {
            number,
            table_group_id,
            description
        })
        .then((response) => {
            return response
        })
    },
    postDesc(description,id) {

        return axios.post('http://localhost:3000/todos/', {
                description,id
            })
            .then((response) => {
                return response.data
            })
    },
    updDesc(description, id , done, date) {
        // console.log(description+id)
        return axios.put('http://localhost:3000/todos/' + id, {
                description,
                done,
                date

            })
            .then((response) => {
                return response
            })
    },
   

}
export default API;