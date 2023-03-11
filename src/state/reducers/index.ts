export enum ACTION_TYPES {
	SET_LIST_VIEW = "SET_LIST_VIEW",
	SET_GRID_VIEW = "SET_GRID_VIEW",
	SET_ORIGINAL_DEALS = "SET_ORIGINAL_DEALS",
	SET_FILTERED_DEALS = "SET_FILTERED_DEALS",
	CLEAN_ORIGINAL_DEALS = "CLEAN_ORIGINAL_DEALS",
	CLEAN_FILTERED_DEALS = "CLEAN_FILTERED_DEALS",
}

export enum VIEW_TYPES {
	GRID = "grid",
	LIST = "list",
}

export type Deal = {
	id: number;
	title: string;
	product_type: string;
	image: {
		src: string;
	};
	quantitySold: number;

	variants: {
		id: number;
		price: number;
	}[];
};

export interface State {
	view: VIEW_TYPES;
	deals: Deal[];
	filteredDeals: Deal[];
}

const initialState: State = {
	view: VIEW_TYPES.GRID,
	deals: [],
	filteredDeals: [],
};

function Reducer(
	state: State = initialState,
	action: { type: ACTION_TYPES; payload: any }
) {
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
		case ACTION_TYPES.SET_ORIGINAL_DEALS:
			return {
				...state,
				deals: action.payload,
			};
		case ACTION_TYPES.SET_FILTERED_DEALS:
			return {
				...state,
				filteredDeals: action.payload,
			};
		case ACTION_TYPES.CLEAN_ORIGINAL_DEALS:
			return {
				...state,
				deals: [],
			};
		case ACTION_TYPES.CLEAN_FILTERED_DEALS:
			return {
				...state,
				filteredDeals: [],
			};
		default:
			return state;
	}
}

export default Reducer;
