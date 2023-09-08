function Quiz() {

    const URL = "http://localhost:7777/quiz"

    async function getQuestion(event){
        event.preventdefault();
        const response = await fetch(URL);
        const quizData = await response.json();
        setQuestion(quizData);
    }
    const [question, setQuestion] = useState({
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    });

    return (
        <div>

        <h1>{question.question}</h1>
        <button>question.answers[0]</button>
        <button>question.answers[1]</button>
        <button>question.answers[2]</button>
        <button>question.answers[3]</button>
        <button type="submit" onClick={getQuestion}>Submit</button>
        </div>
    )
}

export default Quiz