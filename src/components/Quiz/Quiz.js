import { useState } from "react";
import classes from "./Quiz.module.css";
import logo from "../JavaScript-logo.png";
import quiz from "../quiz.svg";

const Quiz = (props) => {
  const list = props.list;
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [saveAnswer, setSaveAnswer] = useState(null);
  const [results, setResults] = useState([]);
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h2 className={classes.capial_h1}>Quiz Time</h2>
        <h2 className={classes.counter}>{`${selectedQuestion + 1}/${
          list.length
        }`}</h2>
        <img alt="logo" className={classes.logo} src={logo}></img>
      </div>
      <div className={classes.showcase}>
        <div className={classes.card}>
          <h2 className={classes.h1}>{list[selectedQuestion].question}</h2>
          <ul className={classes.list}>
            {list[selectedQuestion].answers.map((item) => {
              const itemObj = {
                answer: item,
                id: Math.random() * 10,
              };
              return (
                <button
                  className={classes.item}
                  key={itemObj.id}
                  onClick={() => {
                    let counter = selectedQuestion + 1;
                    setSelectedQuestion(counter);
                    setSaveAnswer(itemObj.answer);
                    setResults(() => {
                      return [
                        ...results,
                        [itemObj.answer, list[selectedQuestion].correctAnswer],
                      ];
                    });
                  }}
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
};

export default Quiz;
