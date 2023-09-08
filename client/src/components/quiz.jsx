function Quiz() {
    const URL = "http://localhost:7777/quiz"
    async function getQuestion(event){
        event.preventdefault();
        const response = await fetch(URL)
    }
    const [question, setquestion] = useState({
        question: "",
        a1: "",
        a2: "",
        a3: "",
        a4: "",
        correct: ""
    })

    return (
        <div>

        <h1>question</h1>
        <button>a1</button>
        <button>a2</button>
        <button>a3</button>
        <button>a4</button>
        <button type="submit" onClick={getQuestion}>Submit</button>
        </div>
    )
}

export default Quiz