import express from "express";
import cors from "cors";


const app = express();
app.use(cors());

const API = "https://opentdb.com/api.php?amount=49&category=27&type=multiple";
const port = process.env.PORT || 7777;

async function getQuiz(API){
    let random = Math.floor(Math.random() * 50);
    let randomIndex = Math.floor(Math.random() * 2);
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
    let answers = data["results"][random]["incorrect_answers"];
    answers.splice(randomIndex, 0, data["results"][random]["correct_answer"])
    const quiz = {
        question: data["results"][random]["question"].replace(/&[^;]+;/g, ""),
        answers: answers.map((item) => item.replace(/&[^;]+;/g, "")),
        correct: data["results"][random]["correct_answer"]
    }
    return quiz;
}

app.get("/", (req, res) => {
    res.json("WELCOME");
});

app.get("/quiz", (req, res) => {
    getQuiz(API).then(result => res.send(result));
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
