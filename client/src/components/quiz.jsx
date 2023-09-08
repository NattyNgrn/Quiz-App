import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
function Quiz() {

    const URL = "http://localhost:7777/quiz"

    async function getQuestion(event){
        event.preventDefault();
        const response = await fetch(URL);
        const quizData = await response.json();
        setQuestion(quizData);
        setResult("");
    }
    const [question, setQuestion] = useState({
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    });
    const [result, setResult] = useState("");
    function checkAnswer(num){
        setResult(question.correct == question.answers[num] ? "CONGRATS" : "FAILED");
    }
    return (
        <div>

        <h1>{question.question}</h1>
        <Button variant="contained" onClick={(e)=>checkAnswer(0)}>{question.answers[0]}</Button>
        <Button variant="contained" onClick={(e)=>checkAnswer(1)}>{question.answers[1]}</Button>
        <Button variant="contained" onClick={(e)=>checkAnswer(2)}>{question.answers[2]}</Button>
        <Button variant="contained" onClick={(e)=>checkAnswer(3)}>{question.answers[3]}</Button>
        {/*<button type="submit" onClick={checkAnswer}>Check answer!</button>*/}
        <Button variant="contained" type="submit" onClick={getQuestion}>Get new question!</Button>
        <h2>{result}</h2>
        </div>
    )
}

export default Quiz