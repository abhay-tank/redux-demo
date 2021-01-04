import { Component } from "react";

class Counter extends Component {
	render() {
		return (
			<div>
				<h1>Counter</h1>
				<h3>Count {"From redux"}</h3>
				<button>➕</button>
				<button>➖</button>
			</div>
		);
	}
}

export default Counter;
