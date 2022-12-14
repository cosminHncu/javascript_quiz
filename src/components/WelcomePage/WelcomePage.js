import classes from "./WelcomePage.module.css";
import logo from "../JavaScript-logo.png";
import React, { useState } from "react";
const WelcomePage = (props) => {
  const [readyPlay, setReadyPlay] = useState(false);
  const handelStartQuiz = () => {
    setReadyPlay(true);
    props.onSaveStartQ(readyPlay);
  };
  const renderContent = () => {
    return (
      <>
        <div className={classes.showcase}>
          <h1 className={classes.header}>DO YOU KNOW JAVASCRIPT?</h1>
          <img alt="logo" className={classes.logo} src={logo}></img>
        </div>
        <div className={classes.info}>
          <div>
            <h3 className={classes.h_text}>
              Well... you have a chance to prove it!{" "}
            </h3>
            <p className={classes.text}>
              The test contains 28 questions and there is no time limit. The
              test is not official, it's just a nice way to see how much you
              know, or don't know, about JavaScript.
            </p>
          </div>
          <button
            onClick={handelStartQuiz}
            type="submit"
            className={classes.button}
          >
            Start
          </button>
        </div>
      </>
    );
  };
  return <>{renderContent()}</>;
};
export default WelcomePage;
