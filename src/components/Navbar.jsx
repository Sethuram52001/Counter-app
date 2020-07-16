import React from 'react';

const Navbar = ({totalCounters}) =>{
	return (
			<div>
				<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">
				Navbar
				<span className="badge badge-pill badge-secondary">{totalCounters}</span>
				</a>
				</nav>
			</div>
		);
}


export default Navbar;
/*const Navbar = (props) =>{
	return (
			<div>
				<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">
				Navbar
				<span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
				</a>
				</nav>
			</div>
		);
}
class Navbar extends React.Component {
	
	state={};

	render() {
		return (
			<div>
				<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">
				Navbar
				<span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
				</a>
				</nav>
			</div>
		);
	}
}*/
