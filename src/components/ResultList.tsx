import React from "react";
import { Box, Grid } from "@mui/material";
import { getDeals } from "../api";
import GridCard from "./molecules/GridCard";
import { useDispatch, useSelector } from "react-redux";
import ListCard from "./molecules/ListCard";
import { State, ACTION_TYPES, Deal, VIEW_TYPES } from "../types";

const ResultList = () => {
	const dispatch = useDispatch();
	const { view, filteredDeals } = useSelector((state: State) => state);
	React.useEffect(() => {
		getDeals().then((res) => {
			dispatch({ type: ACTION_TYPES.SET_ORIGINAL_DEALS, payload: res.data });
			dispatch({ type: ACTION_TYPES.SET_FILTERED_DEALS, payload: res.data });
		});
	}, []);

	return (
		<Grid container spacing={4} sx={{ padding: 2 }}>
			{filteredDeals.map((deal: Deal) => {
				return view === VIEW_TYPES.GRID ? (
					<Grid item xs={3}>
						<GridCard deal={deal} />
					</Grid>
				) : (
					<Grid item xs={12}>
						<ListCard deal={deal} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default ResultList;
