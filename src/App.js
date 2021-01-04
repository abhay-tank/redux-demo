import "./App.scss";
import Counter from "./components/Counter/Counter";
import { Provider } from "react-redux";
import store from "./redux/store/store";
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Counter />
			</div>
		</Provider>
	);
}

export default App;
