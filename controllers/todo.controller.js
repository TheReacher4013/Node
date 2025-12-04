const Todo = require('../models/todo')

//add todo
exports.addTodo = async (req, res) => {
    try {
        const newTodo = new Todo({
            title: req.body.title,
            description: req.body.description
        })

        await newTodo.save();
        return res.status(200).json({
            message: "Todo added successfully"
        })
    } catch (error) {
        console.log(error);
       return res.status(400).json({
            message: "something went wrong"
        })

    }
}

exports.getAllTodos = async (req,res) =>{
    try{
        const docs = await Todo.find();
        return res.status(200).json(docs);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "something went wrong"
        })
    }

}
//single todo fetch karanyasathi. Postman madhe /todo paryant same tyacha nantar /:id he add karaycha manje jaise /todo/6483f5e2c3a3b2a5d6e4f123 ek particular todo fetch karanyasathi.

exports.getTodo = async (req, res) => {
    try{
        const id =req.params.id;
        const doc = await Todo.find({_id: id});
        return res.status(200).json(doc);

    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "something went wrong"
        })
    }
}

//update sathi don ghosti lagtat 1 parameter 2 kay update karaycha ahe te body madhe pathavto ani id pathavto url madhe. jaise /todo/6483f5e2c3a3b2a5d6e4f123

exports.updateTodo = async (req, res) => {
    try{
        const id = req.params.id;
        const { title, description } = req.body;
        await Todo.updateOne({_id: id},{$set: { title, description }});
        return res.status(200).json({
            message: "todo updated successfully"
        }); 
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "something went wrong"
        })
    }
}

exports.deleteTodo = async (req, res) => {
    try{
        const id = req.params.id;
        await Todo.deleteOne({_id: id});
        return res.status(200).json({
            message: "todo deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "something went wrong"
        })
    }
}
//delete sathi pan don ghosti lagtat 1 id url madhe pathavto jaise /todo/6483f5e2c3a3b2a5d6e4f123 and don parameter nahi lagtat karan fakta delete karaycha ahe.

//1 gert -> parameter
//2 delete -> parameter

//3 post->body
//4 put -> parameter and body

//what is cors?
//Cross origin resource sharing
//jevha apan ek domain madhun dusrya domain var request pathavto tevha cors lagto. jaise localhost:3000 madhun localhost:5000 var request pathavto tevha cors lagto. karan he don vegvegle domain ahet. he security purpose sathi ahe. jar cors nasel tar apan ek domain madhun dusrya domain var request pathavushakto. mag attacker sudhha ek domain madhun dusrya domain var request pathavushakto. mag data leak honar. mag cors he ek middleware ahe jo apan app.js madhe use karto. jo apan dusrya domain var request pathavtoy to domain allowed ahe ki nahi he check karto. jar allowed asel tarach request jate nahi tar request block hote.