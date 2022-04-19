const app = require("express")();
const PORT = 8080;

app.listen(PORT, () => console.log("Running on http://localhost:${PORT}"));

app.get("/info", (req, res) => {
    res.status(200).send({
        title: "this is my first api",
        encouragement: "the first step is pretty hard",
    });
});
