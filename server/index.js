const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const positiveThoughts = [
    { id: 1, set_name: "It's all going to turn out fine."},
    { id: 2, set_name: "I will continue to work towards my goals."},
    { id: 3, set_name: "I know my future is going to be great."},
]
let base_id = 4

const { getCompliment, getFortune } = require('./controller')

const controller = require('./controller')

console.log(controller.apple)

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.post("/api/positive", (request, response) => { 
    let new_set = {//added
        id: base_id,
        set_name: request.body.set_name
    }
    positiveThoughts.push(new_set)
    base_id += 1
    response.status(200).send(positiveThoughts)
});

app.delete("/api/positive/:set_id", (request, response) => {
    console.log(request.params.set_id);
    const set = positiveThoughts.find( (set_object) => set_object.id === parseInt(request.params.set_id))
    positiveThoughts.splice(request.params.set_id -1, 1)
    base_id--
    response.status(200).send(positiveThoughts)
});


app.listen(4004, () => console.log("Server running on 4004"));
