import { useState } from "react";
function Quiz() {

    const URL = "http://localhost:7777/quiz"

    async function getQuestion(event){
        event.preventDefault();
        const response = await fetch(URL);
        const quizData = await response.json();
        setQuestion(quizData);
    }
    const [question, setQuestion] = useState({
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    });

    function checkAnswer(num){
        return (question.correct == question.answers[num]) ? "CONGRATS" : "FAILED";
    }
    return (
        <div>

        <h1>{question.question}</h1>
        <button onClick={(e)=>checkAnswer(0)}>{question.answers[0]}</button>
        <button onClick={(e)=>checkAnswer(1)}>{question.answers[1]}</button>
        <button onClick={(e)=>checkAnswer(2)}>{question.answers[2]}</button>
        <button onClick={(e)=>checkAnswer(3)}>{question.answers[3]}</button>
        {/*<button type="submit" onClick={checkAnswer}>Check answer!</button>*/}
        <button type="submit" onClick={getQuestion}>Get new question!</button>
        <h2>{checkAnswer}</h2>
        </div>
    )
}

export default Quiz