import express from "express";
import cors from "cors";


const app = express();
app.use(cors());

const API = "https://opentdb.com/api.php?amount=49&category=27&type=multiple";
const port = process.env.PORT || 7777;

async function getQuiz(API){
    let random = Math.floor(Math.random() * 50); //getting random number between 1-50 for the question in json object
    let randomIndex = Math.floor(Math.random() * 2); //getting random index for splice so the order of answers get moved around
    const response = await fetch(API); //getting API data
    const data = await response.json(); //return data as a json object
    console.log(data);
    let answers = data["results"][random]["incorrect_answers"]; //list of answers for the question
    answers.splice(randomIndex, 0, data["results"][random]["correct_answer"]) //moving the answers around so the correct answer is never in the same place
    //object that will be sent to the front end to get the question and answers
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
//sending the result from the getQuiz function to the path /quiz so the front end can call it;
app.get("/quiz", (req, res) => {
    getQuiz(API).then(result => res.send(result));
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
