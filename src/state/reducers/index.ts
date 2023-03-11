export enum ACTION_TYPES {
	SET_LIST_VIEW = "SET_LIST_VIEW",
	SET_GRID_VIEW = "SET_GRID_VIEW",
}

export enum VIEW_TYPES {
	GRID = "grid",
	LIST = "list",
}

export interface State {
	view: VIEW_TYPES;
}

const initialState: State = {
	view: VIEW_TYPES.GRID,
};

function Reducer(state: State = initialState, action: { type: ACTION_TYPES }) {
	switch (action.type) {
		case ACTION_TYPES.SET_LIST_VIEW:
			return {
				...state,
				view: VIEW_TYPES.LIST,
			};
		case ACTION_TYPES.SET_GRID_VIEW:
			return {
				...state,
				view: VIEW_TYPES.GRID,
			};
		default:
			return state;
	}
}

export default Reducer;
