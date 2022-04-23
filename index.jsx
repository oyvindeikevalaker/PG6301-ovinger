import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function FrontPage() {
    return <div>
        <h1>Quiz app</h1>
        <button>Take a new quiz</button>
    </div>;
}

function QuizGame(){
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(<QuizGame />, document.getElementById("app"));