import { ActionType, toggleTheme, TOGGLE_THEME } from "../actions/actions";

export interface State {
    light: boolean;
}

const initialState: State = {
    light: true,
};

function Reducer(state: State = initialState, action: ActionType) {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                light: toggleTheme(state.light),
            };
        default:
            return state;
    }
}

export default Reducer;
