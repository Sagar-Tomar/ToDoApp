const express = require('express')
const router = express.Router();
const ToDoItems = require('./toDoSchema')
const mongoose = require('./mongoose-connection')


router.post('/updateStatus', async (req, res) => {

    try {



        let a = await ToDoItems.findByIdAndUpdate(req.body._id, { complete: true }, { useFindAndModify: false })
        res.status(200).json({
            message: "updated"
        })






    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }

})


router.post('/addItem', async (req, res) => {

    try {
        const itemToAdd = new ToDoItems(req.body);



        let a = await itemToAdd.save()
        res.status(200).json({
            message: "success"
        })


    } catch (e) {
        res.status(400).json({
            message: e.message
        })

    }

})

router.get('/getItems', async (req, res) => {
    try {
        const items = await ToDoItems.find({});
        res.status(200).send(items);
    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }

})


module.exports = router