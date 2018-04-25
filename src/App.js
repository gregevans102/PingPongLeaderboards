import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Standings from './components/Standings';
import ReactTable from 'react-table';
import Leaderboard from './components/Leaderboard';
import 'react-table/react-table.css';


class App extends Component {
  render() {
    return (
      <div className="mainContainer">                
        <div className="parrallaxContainer">
            <div className="banner" />
            <div className="overlay" />
        </div>
        <Header />
        <div className="playerListContainer">
        <h1 className="champTitle title">Leaderboard</h1>
          <div className="champs">
            <Leaderboard/>
            </div>
            <div className="standings" >
            <h1 className="title">Current Standings</h1>
            <Standings />
            </div>
        </div>
      </div>            
    );
  }
}

export default App;
