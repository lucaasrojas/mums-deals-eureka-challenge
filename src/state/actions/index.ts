import { ACTION_TYPES, Deal, SORT_OPTIONS } from "../../types";

export const setFilteredDeals = (deals: Deal[]) => ({
	type: ACTION_TYPES.SET_FILTERED_DEALS,
	payload: deals,
});

export const setDeals = (deals: Deal[]) => ({
	type: ACTION_TYPES.SET_ORIGINAL_DEALS,
	payload: deals,
});

export const setSortBy = (sortBy: SORT_OPTIONS | undefined) => ({
	type: ACTION_TYPES.SET_SORT_BY,
	payload: sortBy,
});

export const setGridView = () => ({
	type: ACTION_TYPES.SET_GRID_VIEW,
});
export const setListView = () => ({
	type: ACTION_TYPES.SET_LIST_VIEW,
});
