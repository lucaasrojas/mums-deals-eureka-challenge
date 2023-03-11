import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_THEME } from "../state/actions/actions";
import { State } from "../state/reducers";

const ToggleTheme = () => {
    const state = useSelector((state: State) => state);
    const dispatch = useDispatch();

    React.useEffect(() => {
        changeTheme(state.light);
    }, [state]);

    const changeTheme = (light) => {
        const body = document.body;

        body.style.background = light ? "black" : "white";
        body.style.color = light ? "white" : "black";
    };

    const handleChangeTheme = () => {
        dispatch({ type: TOGGLE_THEME });
    };
    return <button onClick={handleChangeTheme}>Toggle Theme</button>;
};

export default ToggleTheme;
