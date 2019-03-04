import React from "react";
import classes from "./FinishedQuiz.module.scss";
import Button from "../UI/button/Button";

const FinishedQuiz = ({ results, quiz, onRetry }) => {
  const successQuestion = Object.keys(results).reduce((total, next) => {
    if (results[next] === "success") {
      total++;
    }
    return total;
  }, 0);
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {quiz.map((quiz, i) => {
          const cls = [
            "fa",
            results[quiz.id] === "error" ? "fa-times" : "fa-check",
            classes[results[quiz.id]]
          ];
          return (
            <li key={i}>
              <strong>{i + 1}. </strong>
              {quiz.qwestion}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
        <p>
          Правильно {successQuestion} из {quiz.length}
        </p>
        <div>
          <Button onClick={onRetry} type={"primary"}>
            повторить
          </Button>
          <Button type={"success"}>Перейти в список тестов</Button>
        </div>
      </ul>
    </div>
  );
};
export default FinishedQuiz;
