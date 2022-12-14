import classes from "./FinalPage.module.css";
import final from "../final.svg";
import { useSpring, animated } from "react-spring";

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

const FinalPage = ({ results, onRestart }) => {
  const finalResults = results.filter((set) => set[0] === set[1]);
  const perc = Math.round((finalResults.length / results.length) * 100);
  const message = `You ${
    perc <= 80 ? `should learn more Javascript!` : `can be proud of yourself!`
  }`;

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.final_header}>{message}</h2>
      <div className={classes.header}>
        <h2
          className={classes.final_text}
        >{`You scored ${finalResults.length} out of ${results.length}`}</h2>
        <h2 className={classes.percentage}>
          <Number n={perc} />%
        </h2>
      </div>
      <img alt="final" className={classes.final} src={final} />
    </div>
  );
};

export default FinalPage;
