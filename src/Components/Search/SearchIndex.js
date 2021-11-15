// import React from 'react';
// import { Input } from 'reactstrap';
// // import { useState, useEffect } from 'react';

// export default class SearchIndex extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],searchTerm:''
//     }
//   }

//   searchFunction() {
//     fetch(`${this.state.things}`)
//   }

//   editSearchTerm = (e) => {
//     this.setState({searchTerm: e.target.value})
//   }

//   dynamicSearch = () => {
//     return this.state.things.filter(things => things.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
//   }



//   render() {
//     return (
//       <div>
//         <Input placeholder='Search Here' value={this.state.searchTerm} onChange={this.editSearchTerm}/>
//         <button onClick={() => this.searchFunction()} >Search</button>
        
//         <h3>Results:</h3>
//         <ul>
//           <li things={this.dynamicSearch}></li>
          
//           {this.state.searchTerm}
//           {this.state.things.map(d => <li key={d.things}>{d.things}</li>)}
//         </ul>
//       </div>
//     )
//   }
// }

import React, { Component } from "react";
import { Input } from "reactstrap";
class SearchIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'], filterThings: []
    }
  }
componentDidMount() {
  this.searchFunction()
}
  searchFunction = () => {
    let searchterm = document.getElementById("search").value.toLowerCase()
    if (searchterm === '') {
      this.setState({
        filterThings: this.state.things
      })
    } else {
      let filterResult = this.state.things.filter((things) => {
        if (things.toLowerCase().includes(searchterm)) {
          return things
        }
      })
      this.setState ({
        filterThings: filterResult,
      })
      console.log(this.state.filterThings)
    }}
    render() {
      return (
        <div>
          <Input id="search" onChange={this.searchFunction} />
          <h3>Results:</h3>
          {this.state.filterThings.map((items) => (
            <p> {items} </p>
          ))}
        </div>
      )
    }
  }
export default SearchIndex;


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