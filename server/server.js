import express from "express";
import cors from "cors";


const app = express();
app.use(cors());

const API = "https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple";
const port = process.env.PORT || 7777;

async function getQuiz(API){
    const response = await fetch (API);
    const data = await response.json();
    console.log(data);
    return data;
}

app.get("/", (req, res) => {
    res.json("WELCOME");
});

app.get("/quiz", (req, res) => {
    getQuiz(API).then(result => res.send(result));
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
