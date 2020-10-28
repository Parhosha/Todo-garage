const axios = require('axios');

const API = {
    get() {
        
        return axios
            .get('https://ancient-atoll-77175.herokuapp.com/todos' )
            .then((response) => {
                return response
            })

    },
    getUser(user){
        
        return axios
        .post('https://ancient-atoll-77175.herokuapp.com/users',
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
        .get('https://ancient-atoll-77175.herokuapp.com/todoList/' + id)
        .then((response) => {
            return response 
        })
    },
    deleteId(id) {

        return axios.delete('https://ancient-atoll-77175.herokuapp.com/todos/' + id)
            .then((response) => {
                return response
            })
    },
    deleteTableId(id) {

        return axios.delete('https://ancient-atoll-77175.herokuapp.com/todoList/' + id )
            .then((response) => {
                return response
            })
    },
    addNewTab(number,table_group_id,description){
        
        return axios.post('https://ancient-atoll-77175.herokuapp.com/todoList', {
            number,
            table_group_id,
            description
        })
        .then((response) => {
            return response
        })
    },
    postDesc(description,id) {

        return axios.post('https://ancient-atoll-77175.herokuapp.com/todos/', {
                description,id
            })
            .then((response) => {
                return response.data
            })
    },
    updDesc(description, id , done, date) {
        // console.log(description+id)
        return axios.put('https://ancient-atoll-77175.herokuapp.com/todos/' + id, {
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