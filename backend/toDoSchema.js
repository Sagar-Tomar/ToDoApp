const mongoose = require('mongoose')
const validator = require('validator')

const toDoItems = mongoose.Schema({
    title: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return v.trim().length > 3
            },
            message: props => `${props.value} is not a valid title!`
          }
     
    },
    description: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return v.trim().length > 3
            },
            message: props => `${props.value} is not a valid description!`
          }
     
    },
    complete: {
        type: Boolean,
        required: true
    }
})
const ToDoItems = mongoose.model("ToDoItems",toDoItems);

module.exports = ToDoItems;