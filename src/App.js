// import logo from './logo.svg';
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    started: false,
  };

  render() {
    const { started } = this.state;
    const [Rock, Paper, Scissors] = [
      "https://i.imgur.com/TONXH9s.png",
      "https://i.imgur.com/t2154qR.png",
      "https://i.imgur.com/SXstPKk.png"
    ];
    return (
      <div className="App">
        <h1>Rock Paper Scissors</h1>
        {started ? (
          <div className="Game">
            <div className="Player">
              <p>Player</p>
              <div className="choose">
                  {[
                  [Rock, "Rock"],
                  [Paper, "Paper"],
                  [Scissors, "Scissors"]
                ].map((a) => (
                    <span key={a[1]}>
                    <img src={a[0]} alt={a[1]} />
                      {a[1]}
                    </span>
                  ))}
              </div>
            </div>
            <div className="Computer">
              <p>Computer</p>
              <img src="https://i.imgur.com/CyvHqQH.png" alt="All Choices" />
            </div>
          </div>
        ) : (
          <img
            src="https://i.imgur.com/iO8f1Lk.jpg"
            alt="start"
            className="start"
            onClick={() => {
              this.setState({ started: true });
            }}
          />
        )}
      </div>
    );
  }
}

export default App;
