import React from 'react';
import { Input } from 'reactstrap';
// import { useState, useEffect } from 'react';

export default class SearchIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],searchTerm:''
    }
  }



  searchFunction() {
    fetch(`${this.state.things}`)
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.things.filter(things => things.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }



  render() {
    return (
      <div>
        <Input placeholder='Search Here' value={this.state.searchTerm} onChange={this.editSearchTerm}/>
        <button onClick={() => this.searchFunction()} >Search</button>
        
        <h3>Results:</h3>
        <ul>
          <li things={this.dynamicSearch}></li>
          
          {this.state.searchTerm}
          {this.state.things.map(d => <li key={d.things}>{d.things}</li>)}
        </ul>
      </div>
    )
  }
}



// import React from 'react';
// import { Input } from 'reactstrap';
// import {useState, useEffect} from 'react';
// import { ReactDOM } from 'react';

// export default class SearchIndex extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
//     }
//   }

//   searchFunction(props) {
//     fetch(`${this.state.things}`)
//   }

//  searchThings(){
//    const [searchTerm, setSearchTerm] = useState('');
//    const [searchResult, setSearchResult] = useState([]);
//    const handleChange = event => {
//      setSearchTerm(event.target.value);
//    };
//    React.useEffect(() => {
//      const results = things.filter(things => things.includes(searchTerm));
//      setSearchResult(results);
//    }, [searchTerm]);
//  }


//   render() {
//     return (
//       <div>
//         <Input placeholder='Search Here' value={searchTerm} onChange={handleChange} />
//         <button onClick={() => this.searchFunction()} >Search</button>
//         {this.searchFunction()}
//         <h3>Results:</h3>
//         <ul>
//           {SearchResult.map(things => (<li>{things}</li>))}
//         </ul>
//       </div>
//     )
//   }
// }