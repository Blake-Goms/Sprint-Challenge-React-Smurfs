import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then( res => {
        console.log(res);
        this.setState({smurfs: res.data})
      })
      .catch( err => {
        console.log(err);
      });
  };

  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then( res => this.setState({ smurfs: res.data }))
      .catch( err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={NavBar} />
        <Route path='/smurf-form' render={() => <SmurfForm addSmurf={this.addSmurf}  />} />
        <Route path='/' render={() =>  <Smurfs smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
