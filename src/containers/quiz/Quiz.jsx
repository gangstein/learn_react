import React, { Component } from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

export default class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        qwestion: "Какого цвета небо?",
        id: 1,
        rightAnswer: 2,
        answers: [
          {
            text: "черный",
            id: 1
          },
          {
            text: "синий",
            id: 2
          },
          {
            text: "красный",
            id: 3
          },
          {
            text: "зеленый",
            id: 4
          }
        ]
      },
      {
        qwestion: "В каком году основан Питер?",
        id: 2,
        rightAnswer: 3,
        answers: [
          {
            text: "1700",
            id: 1
          },
          {
            text: "1705",
            id: 2
          },
          {
            text: "1703",
            id: 3
          },
          {
            text: "1803",
            id: 4
          }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    console.log(this);
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    const results = this.state.results;
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswer === answerId) {
      if (!results[this.state.activeQuestion + 1]) {
        results[this.state.activeQuestion + 1] = "success";
      }

      this.setState(
        {
          results,
          answerState: { [answerId]: "success" }
        },
        () => {
          console.log(this.state.answerState);
        }
      );

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log("finished");
          this.setState({
            isFinished: true
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[this.state.activeQuestion + 1] = "error";
      this.setState(
        {
          results,
          answerState: { [answerId]: "error" }
        },
        () => {
          console.log(this.state.answerState);
        }
      );
    }
  };

  onRetryHandler = () => {
    this.setState({
      answerState: null,
      activeQuestion: 0,
      isFinished: false,
      results: {}
    });
  };

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  };

  render() {
    let answers = this.state.quiz[this.state.activeQuestion].answers;
    let qwestion = this.state.quiz[this.state.activeQuestion].qwestion;
    let quizLength = this.state.quiz.length;
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              onRetry={this.onRetryHandler}
              quiz={this.state.quiz}
            />
          ) : (
            <ActiveQuiz
              answers={answers}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={quizLength}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
              qwestion={qwestion}
            />
          )}
        </div>
      </div>
    );
  }
}
