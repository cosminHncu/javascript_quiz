import classes from "./FinalPage.module.css";
import final from "../final.svg";
import logo from "../JavaScript-logo.png";

const FinalPage = (props) => {
  const [...results] = props.results;
  const finalResults = results.filter((set) => set[0] === set[1]);
  const perc = Math.round((finalResults.length / results.length) * 100);
  const message = `You ${
    perc <= 80 ? `can learn more Javascript!` : `can be proud of yourself!`
  }`;

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.final_header}>{message}</h2>
      <div className={classes.header}>
        <h2
          className={classes.final_text}
        >{`You scored ${finalResults.length} out of ${results.length}`}</h2>
        <h2 className={classes.percentage}>{`${perc}%`}</h2>
      </div>
      <img alt="final" className={classes.final} src={final}></img>
    </div>
  );
};

export default FinalPage;

//  <h1>{`${final.length}/${results.length}`}</h1>