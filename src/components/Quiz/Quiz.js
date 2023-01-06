import { useState } from "react";
import classes from "./Quiz.module.css";
import logo from "../JavaScript-logo.png";
import quiz from "../quiz.svg";
import FinalPage from "../FinalPage/FinalPage";
import Container from "../UI/Container/Container";

const Quiz = ({ list }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [saveAnswer, setSaveAnswer] = useState(null);
  const [results, setResults] = useState([]);
  const [quizDone, setQuizDone] = useState(false);

  const handleButton = (e) => {
    let counter = selectedQuestion + 1;
    setSelectedQuestion(counter);
    setSaveAnswer(e.target.textContent);
    setResults(() => {
      return [
        ...results,
        [e.target.textContent, list[selectedQuestion].correctAnswer],
      ];
    });
    if (results.length + 1 === list.length) {
      setQuizDone(true);
    }
  };

  const restart = () => {
    setSelectedQuestion(0);
    setQuizDone(false);
    setResults([]);
  };

  const renderQuiz = () => (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h2 className={classes.header_text}>Quiz Time</h2>
        <h2 className={classes.counter}>{`${selectedQuestion + 1}/${
          list.length
        }`}</h2>
        <img alt="logo" className={classes.logo} src={logo}></img>
      </div>
      <div className={classes.showcase}>
        <div className={classes.card}>
          <h2 className={classes.question}>
            {list[selectedQuestion].question}
          </h2>
          <ul className={classes.list}>
            {list[selectedQuestion].answers
              .sort((a, b) => 0.5 - Math.random())
              .map((item) => {
                const itemObj = {
                  answer: item,
                  id: Math.random() * 10,
                };
                return (
                  <button
                    className={classes.item}
                    key={itemObj.id}
                    onClick={handleButton}
                  >
                    {itemObj.answer}
                  </button>
                );
              })}
          </ul>
        </div>
        <img alt="quiz" className={classes.quiz} src={quiz}></img>
      </div>
    </div>
  );
  return (
    <>
      {!quizDone ? (
        renderQuiz()
      ) : (
        <FinalPage onRestart={restart} results={results} />
      )}
    </>
  );
};

export default Quiz;
