
//Had issues getting my data calls seperated..
// import React from 'react';
// const url = 'http://localhost:3000/leaderboard';


// class FetchData extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           data: [
              
//           ]
//             };
//       }
//         componentDidMount() {    
//             let that = this;
//             //initial fetch to grab data
//             fetch(url)
//             .then(function(response) {
//                 if (response.status >= 400) {
//                 throw new Error("Bad response from server");
//                 }
//                 return response.json();
//             })
//             .then(function(data) {
//                 that.setState({ data: data });
//             });

//             //fetch on a timer which updates the state
//             let fetchTimer = setInterval(() => fetch(url)
//             .then(function(response) {
//                 if (response.status >= 400) {
//                 throw new Error("Bad response from server");
//                 }
//                 return response.json();
//             })    
//             .then(function(data) 
//             {that.setState({ data: data});}), 5000);
//         }

//         render() {
//             const newData = this.state.data.map( (rowData , index ) => 
//             <li key={index} 
//             name={rowData.name} 
//             wins={rowData.wins} 
//             losses={rowData.losses} 
//             elo={rowData.elo} 
//             ratio={(rowData.wins/rowData.losses).toFixed(2)}/>);
//             return {
        
//             }
//         }
// }


// export default FetchData;

