import React from 'react';

class Counter extends React.Component {
	/*state={
		count: this.props.counter.value,
		//tags: ['tag1','tag2','tag3'],
	};*/

	componentDidUpdate(prevProps,prevState){
		//to get additional ajax reqs
		console.log('prevProps',prevProps);
		console.log('prevState',prevState);
		/*if(prevProps.counter.value !== this.this.props.counter.value)
		{
			//ajax call and get new data from the server
		}*/
	}

	componentWillUnmount()
	{
		console.log('Counter-unmounted');
	}

	formatCount()
	{
		const count =this.props.counter.value;
		return count === 0  ? 'Zero' : count;
	}

	getBadgeClasses()
	{
		let  classes = "badge m-2 badge-";
		classes += (this.props.counter.value === 0) ? "warning" : "primary";
		return classes;
	}

	/*handleIncrement= (product) =>{
		console.log(product);
		this.setState({count : this.state.count+1})
	};*/
	
	/*doHandleIncrement = () =>{
		this.handleIncrement({id:1});
	};*/

	render() {
		console.log("Counter rendered");
		//console.log('props',this.props);
		return (
			<div>
		{/*{this.props.children}*/}
			<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
			<button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
			<button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
			{/*<ul>
			{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
			</ul>*/}
			{/*(product) => this.handleIncrement(product)*/}
			</div>
		);
	}
}

export default Counter;