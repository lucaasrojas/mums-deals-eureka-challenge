import React from "react";
import { Provider } from "react-redux";
import store from "../state/stores";
import ToggleTheme from "./ToggleTheme";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <h1>App</h1>
            <ToggleTheme />
        </Provider>
    );
};

export default App;
