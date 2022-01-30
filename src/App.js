// import logo from './logo.svg';
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    Started: false,
    Player: null,
    Computer: null,
    Name: ""
  };

  render() {
    const { Started, Player, Computer, Name } = this.state;
    const Images = {
      Rock: "https://i.imgur.com/TONXH9s.png",
      Paper: "https://i.imgur.com/t2154qR.png",
      Scissors: "https://i.imgur.com/SXstPKk.png",
    };
    return (
      <div className="App">
        <h1>Rock Paper Scissors</h1>
        {Started ? (
          <div className="Game">
            <div className="Player">
              <p>Player</p>
              {Player ? (
                <img src={Images[Player]} alt={Player} />
              ) : (
              <div className="choose">
                {Object.keys(Images).map((a) => (
                  <span key={a}>
                    <img src={Images[a]} alt={a} />
                    {a}
                  </span>
                ))}
              </div>
              )}
            </div>
            <div className="Computer">
              <p>Computer</p>
            {Computer ? (
                <img src={Images[Computer]} alt={Computer} />
              ) : (
                <img src="https://i.imgur.com/CyvHqQH.png" alt="All Choices" />
              )}
            </div>
          </div>
        ) : (
          <img
            src="https://i.imgur.com/iO8f1Lk.jpg"
            alt="start"
            className="start"
            onClick={() => {
              this.setState({ Started: true });
            }}
          />
        )}
      </div>
    );
  }
}

export default App;
