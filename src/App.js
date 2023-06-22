

import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  state={
    personne: {
      fullName: "Mohamed kammoun",
      bio: "Lorem ipsum dolor sit amet",
      imgsrc:"https://img.freepik.com/photos-premium/portrait-homme-affaires-heureux-telephone-intelligent-au-bureau_637285-8763.jpg"
      ,profession: "Développeur"
    },
  
    isShow:false,
    count:0,
  }
  handlePlus=()=>this.setState({count:this.state.count+1})
  handleShow=()=>this.setState({isShow:!this.state.isShow})
  
  componentDidMount(){

    setInterval(this.handlePlus, 1000);
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleShow}>Show</button>
        { this.state.isShow?
     <>
      <h1>{this.state.personne.fullName}</h1> 
      <h1>{this.state.personne.bio}</h1> 
      <img src="https://img.freepik.com/photos-premium/portrait-homme-affaires-heureux-telephone-intelligent-au-bureau_637285-8763.jpg" alt="" />
      <h1>{this.state.personne.profession}</h1> 
     
     </>
      :null}
      
      </div>
    )
  }}