const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const positiveThoughts = [
    { id: 1, set_name: "1PT"},
    { id: 2, set_name: "2PT"},
    { id: 3, set_name: "3PT"},
]
let baseID = 4

const { getCompliment, getFortune } = require('./controller')

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


app.listen(4000, () => console.log("Server running on 4000"));
