const app = require("express")();
const PORT = 8080;

app.listen(PORT, () => console.log("Running on http://localhost:${PORT}"));

app.get("/info", (req, res) => {
    res.status(200).send({
        name: "first API with express",
        created: "18 April 22",
    });
});
