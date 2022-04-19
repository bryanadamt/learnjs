const express = require("express");
const app = express()

app.use(express.json())

const PORT = 8080;

app.listen(PORT, () => console.log("listening on " + PORT))

app.get("/info", (req, res) => {
    res.status(200).send({
        name:"newapi",
        age:"just created"
    });
});

app.post('/info/:id', (req, res) => {

    const {id} = req.params;
    const {info} = req.body;

    if (!info) {
        res.status(400).send({message: 'No info detected'})
    }

    res.send({
        name : `Here is you ${info} and your ${id}`
    });
})