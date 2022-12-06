import classes from "./WelcomePage.module.css";
import Card from "../UI/Card";
import logo from "../JavaScript-logo.png";

const WelcomePage = () => {
  return (
    <>
      <div className={classes.showcase}>
        <h1 className={classes.header}>DO YOU KNOW JAVASCRIPT?</h1>
        <img className={classes.logo} src={logo}></img>
      </div>
      <div className={classes.info}>
        <h3 className={classes.h_text}>
          Well... you have a chance to prove it!{" "}
        </h3>
        <p className={classes.text}>
          The test contains 20 questions and there is no time limit. The test is
          not official, it's just a nice way to see how much you know, or don't
          know, about JavaScript.
        </p>
      </div>
    </>
  );
};
export default WelcomePage;
