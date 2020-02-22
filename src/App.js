import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
class App extends Component {
  state = {
    counters: [{id: 1, value: 4}, {id: 2, value: 0}, {id: 3, value: 0}],
  };

  constructor(props){
    super(props);    
    console.log("constructor")
  }

  //LIFECYCLE PHASES
  //AJAX call - get data from server
  componentDidMount(){
    console.log("mounted")
  }
  
  addCounter = counter => {
    console.log (counter);
    let addedCounters = [...this.state.counters];
    addedCounters.forEach (c => {
      if (c.id === counter.id) c.value += 1;
    });
    console.log (addedCounters);
    this.setState ({
      counters: addedCounters,
    });
  };
  deleteCounter = counterId => {
    console.log ('delete', counterId);
    //cant update state directly, hance create a new array => set state with the new array
    let modifiedCounters = this.state.counters.filter (
      counter => counter.id !== counterId
    );
    console.log (modifiedCounters);
    this.setState ({
      counters: modifiedCounters,
    });
  };

  counterReset = () => {
    let counterDeleted = this.state.counters.map (c => {
      c.value = 0;
      return c;
    });
    this.setState ({counters: counterDeleted});
  };

  render () {
    console.log("rendered")
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.counterReset}
            onDelete={this.deleteCounter}
            onAdd={this.addCounter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
