import React from "react";
import ReactDOM from "react-dom";
import {QuizGame} from "./quizGame";
import {BrowseRouter} from "react-router-dom"

ReactDOM.render(<BrowseRouter><QuizGame/></BrowseRouter>, document.getElementById("app"));