import React, { Component } from 'react'; 
import  Ninjas from './Ninjas';
import AddNinja from './NinjaAdd';

class App extends Component {
  state = {
    ninjas: [
        {name:'Ryu', age: 25, belt:'black', id:1},
        {name:'ken', age: 30, belt:'white', id:2},
        {name:'bruno', age: 35, belt:'purple', id: 3},
    ]
}

  addNinja = (ninja)=>{
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas
    })
  }

  deleteNinja = (id)=>{
    let ninjas = this.state.ninjas.filter(ninja=>ninja.id !== id);
    this.setState({ninjas});
  }

  render() {
    return (
      <div className="App">
       <h1>My First React App</h1>
       <p>Welcome!!</p>
       <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
       <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
