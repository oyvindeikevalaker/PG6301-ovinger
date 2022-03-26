import * as React from "react";
import * as ReactDOM from "react-dom";
import {useState} from "react";
import { randomQuestion, isCorrectAnswer } from "./questions";



function Quiz() {
    const [question, setQuestion] = useState(randomQuestion());
    const [answer, setAnswer] = useState();

    function handleRestart(){
        setQuestion(randomQuestion());
        setAnswer(undefined);
    }


    if (answer) {
        return <ShowAnswerStatus question={question} onAnswer = {setAnswer} onRestart={handleRestart} />;
    }
    return <ShowQuestion question={question} onAnswer = {setAnswer}/>;
}

function ShowQuestion(question, onAnswer) {
    return <>
        <h1>{question.question}</h1>
        {Object.keys(question.answers)
            .filter(a => question.answers[a])
            .map(a => <p key={a}>
                <button onClick={() => onAnswer(a)}>{question.answers[a]}</button>
            </p>)}
    </>;
}

    function ShowAnswerStatus(question, answer, setQuestion, setAnswer) {
        return <>
            <h1>{isCorrectAnswer(question, answer) ? "Right" : "Wrong"}</h1>
            <p>
                <button onClick={() => {
                    setQuestion(randomQuestion());
                    setAnswer(undefined);
                }}>Another question
                </button>
            </p>
        </>;
    }

ReactDOM.render(<Quiz/>, document.getElementById("app"));
