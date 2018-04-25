import React from 'react';
import ReactTable from "react-table";

const url = 'http://localhost:3000/leaderboard';


//sets up headers for react-table
const columns = [
    {
    Header: 'Name',
    accessor: 'props.name'
  }, {
    Header: 'Wins',
    accessor: 'props.wins'
  }, {
    Header: 'Losses',
    accessor: 'props.losses'
  }, {
    Header: 'Skill',
    accessor: 'props.elo'
  }, {
    Header: 'W/L',
    accessor: 'props.ratio'
  }
];

//sets up default sorting
const defaultSorting = [{ id:"props.ratio", desc: true}];


class Standings extends React.Component {
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
    
    render() {

        const newData = this.state.data.map( (rowData , index ) => 
        <li key={index} name={rowData.name} wins={rowData.wins} losses={rowData.losses} elo={rowData.elo} ratio={(rowData.wins/rowData.losses).toFixed(2)}/>);
       // console.log("new data: ",newData);
       // console.log("state data: ", this.state.data);
        return (
          <ReactTable data={newData} 
                    columns={columns} 
                    defaultPageSize={7} 
                    showPaginationBottom={false} 
                    defaultSorted={defaultSorting}  
                    className="-striped -highlight"
                    />
                   
        );
       
      }
}

export default Standings;
 


