import React from 'react';
import ReactTable from 'react-table';
import PropTypes from'prop-types';
const url = 'http://localhost:3000/leaderboard';


//sets up Player rows styling
const Row = ({name, wins, losses, elo, ratio}) => (
    <tr className="player">
        <td>
            <h1>{name}</h1>
            <h3>Wins: {wins} Losses: {losses}</h3>
        </td>
        <td>{elo}</td>
        <td>{(wins/losses).toFixed(2)}</td>
    </tr>
);

//setup prop types


//setup data array, I tried to move this to Data.js but had issues
class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
            
      }

    componentDidMount() {    
        let that = this;
        //initial fetch to grab data
        fetch(url)
        .then(function(response) {
            if (response.status >= 400) {
            throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function(data) {
            that.setState({ data: data });
        });

        //fetch on a timer which updates the state
        let fetchTimer = setInterval(() => fetch(url)
        .then(function(response) {
            if (response.status >= 400) {
            throw new Error("Bad response from server");
            }
            return response.json();
        })    
        .then(function(data) 
        {that.setState({ data: data});}), 5000);
    }

//couldnt get sorting fully working on leaderboard click
//   sortAscending(property){
//         return function (a,b) {
//             console.log('this.state.data.');
//             return (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
//         }      
//     } 

    render() {
        //loads state and sorts it by elo into a new array
        const rows = [].concat(this.state.data)
        .sort((a,b)=> a.elo < b.elo)
        .map( (rowData, index) => <Row {...rowData} key={index} />);

        return (
          <table id="playerList" className="table">
              <tbody className="playerList">
                  <tr className="listHeader">
                          <th>Name</th>                
                          <th className="pointer">Skill</th>
                          <th className="pointer">W/L</th>
                  </tr>
                      {rows}
              </tbody>
          </table>
        );        
      }
}

//setup proptypes
Row.propTypes = {
    name: PropTypes.string,
    wins: PropTypes.number,
    losses: PropTypes.number,
    elo: PropTypes.number,
    ratio: PropTypes.number
 };

export default Leaderboard;