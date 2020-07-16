import React from 'react';
import Counter from './Counter.jsx';

class Counters extends React.Component {
	
	render() {

		const {onReset,counters,onDelete,onIncrement}=this.props;
		return (
			<div>
			<button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
			{this.props.counters.map(counter => 
			<Counter key={counter.id} onIncrement={onIncrement} onDelete={onDelete} counter={counter} >}
			{/*value={counter.value} id={counter.id} */}
			{/*<h4>Counter #{counter.id}</h4>*/}
			</Counter>)}{/*selected="true"*/}
			</div>
		);
	}
}

export default Counters;