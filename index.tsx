import * as React from "react";
import * as ReactDOM from "react-dom";
import { QuizGame } from "./quizGame";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <QuizGame />
  </BrowserRouter>,
  document.getElementById("app")
);
