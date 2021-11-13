import React, { Component } from 'react';
// import {useState, useEffect} from 'react';
// import Dogs from './Dogs'

export default class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
    }
//https://dog.ceo/api/breeds/image/random
    // componentDidMount() {
    //     console.log('Component Mounted');
    dogPicture(){
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => this.setState({
                img: data.message
            })
            ).catch(err => this.catchError(err));
    }

    catchError(err){
        return(
            <div>
                <h1>Error getting image</h1>
                <p>{err}</p>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Random Dog Photo</h2>
                <button onClick={()=> this.dogPicture()}>Random Dog</button>
                <img src={this.state.img}/>
                {/* <Dogs url={this.state.img}/> */}
                
            </div>
        )
    }


}