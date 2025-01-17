const Result = ({ result }) => {
    if (!result) {
      return <div id="result"><h2>No result yet!</h2></div>;
    }
  
    return (
      <div id="result">
        <h2>{result}</h2>
      </div>
    );
  };
  export default Result;


          {/* <h2>{result.player}</h2>
        <h2>{result.computer}</h2>
        <h2>{result.outcome}</h2> */}