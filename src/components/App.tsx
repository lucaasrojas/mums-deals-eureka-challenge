import React from "react";
import { Provider } from "react-redux";
import store from "../state/stores";
import DealsPage from "./DealsPage";
import "./App.css";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<DealsPage />
		</Provider>
	);
};

export default App;
