import * as React from "react";
import * as ReactDOM from "react-dom";
import {useState} from "react";
import { randomQuestion, isCorrectAnswer } from "./questions";

function Quiz() {
    const [question, setQuestion] = useState(randomQuestion());
    const [answer, setAnswer] = useState();

    if (answer) {
        return <>
            <h1>{isCorrectAnswer(question, answer)} ? "Right" : "Wrong"}</h1>
        </>;
    }

    return <>
        <h1>{question.question}</h1>
        {Object.keys(question.answers)
            .filter(a => question.answers[a])
            .map(a => <p key={a}>
                <button onClick={() => setAnswer(a)}>{question.answers[a]}</button>
            </p>)}
    </>;
}

ReactDOM.render(<Quiz/>, document.getElementById("app"));
