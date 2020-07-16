import React from 'react';
import Counter from './components/Counter.jsx';
import Counters from './components/Counters.jsx'
import Navbar from './components/Navbar.jsx'

export default class App extends React.Component {
  state={
    counters: [
    {id:1, value:4},
    {id:2, value:0},
    {id:3, value:0},
    {id:4, value:0},
    ]
  }

  constructor(props){
    super(props);
    console.log("App constructor",props);
  }

  componentDidMount()
  {
    //AJAX call
    console.log('App mounted');
  }

  handleIncrement = counter => {
    //console.log(counter);
    const counters = [...this.state.counters];
    const index= counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
    /*console.log(counters);
    const newCounters = this.state.counters.map(c => c.id === counterId;
      c++;);
    this.setState({
      counters:newCounters 
    });*/
  }

  handleReset = () =>{
    const counters = this.state.counters.map(c => {c.value=0; return c;});
    this.setState({counters});
  }

  handleDelete = (counterId) =>{
    /*console.log('Event Handler Called',counterId);*/
    const newCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters: newCounters 
    });
  }

  render() {
    console.log('App - rendered');
    return (
      <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}></Navbar>
          <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} ></Counters> 
          </main>
      </React.Fragment>
    );
  }
}
