import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
    primary: {
        main: '#9e19a9',
        light: '#e2bce5'
    },
    secondary: {main: '#463389',
    light: '#b0a1d0',
    contrastText: '#ece8f3',}
    }
})

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
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'column',
        }}>
            <ThemeProvider theme={theme}>
        <h1>{question.question}</h1>
        <Button style={{margin: '10px'}} variant="contained" onClick={(e)=>checkAnswer(0)}>{question.answers[0]}</Button>
        <Button style={{margin: '10px'}} variant="contained" onClick={(e)=>checkAnswer(1)}>{question.answers[1]}</Button>
        <Button style={{margin: '10px'}} variant="contained" onClick={(e)=>checkAnswer(2)}>{question.answers[2]}</Button>
        <Button style={{margin: '10px'}} variant="contained" onClick={(e)=>checkAnswer(3)}>{question.answers[3]}</Button>
        {/*<button type="submit" onClick={checkAnswer}>Check answer!</button>*/}
        <Button style={{margin: '10px'}} variant="contained" type="submit" onClick={getQuestion} color="secondary" sx={{ ml: 2 }} >Get new question!</Button>
        <h2>{result}</h2>
        </ThemeProvider>
        </div>
    )
}

export default Quiz