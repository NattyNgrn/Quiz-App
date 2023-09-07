import express from "express";
import cors from "cors";
import pg from "pg";

const app = express();
app.use(cors());

const API = "https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple";
const port = process.env.PORT || 7777;

async function userPass() {

}

async function getQuiz(){
    const response = await fetch (API);
    const data = await response.json();
    return data;
}

app.get("/users", (req, res) => {
    res.json("USER AND PASSWORD");
});

app.get("/quiz", (req, res) => {
    res.json("QUIZ");
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
