import React from 'react';
import axios from 'axios';
import Navbar from "./components/Navbar";
import "./styles.scss";

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {

    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data);
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err.message));

  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="players">
          <h2>&nbsp;&nbsp;&nbsp;Players&nbsp;&nbsp;&nbsp;</h2>
          {this.state.players.map(player => (
            <h3>{player.name} from {player.country} </h3>
          ))}
        </div>
      </div>
    );
  }
}

export default App;



