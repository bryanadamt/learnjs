const app = require("express")();
const PORT = 8080;

app.listen(PORT, () => console.log("Running on http://localhost:${PORT}"));

app.get("/info", (req, res) => {
    res.status(200).send({
        title: "this is my first api",
        encouragement: "the first step is pretty hard",
    });
});

app.get("/work", (req, res) => {
    res.status(200).send({
        work: "software engineering",
        time: "5am - drop",
        salary: "peanuts",
    });
});

app.get("/trial", (req, res) => {
    res.status(200).send({
        trial:"complete",
        success:"not guaranteed"
    });
});

app.get("/hack", (req, res) => {
    res.status(200).send({
        hack:"initiated",
        times:42,
        NSA:"gone"
    });
});

app.post("info/:id", (req, res) => {
    const { id } = req.params;
});