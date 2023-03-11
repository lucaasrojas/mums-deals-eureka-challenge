import React from "react";
import { Box, Grid } from "@mui/material";
import { getDeals } from "../api";
import GridCard from "./molecules/GridCard";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES, Deal, State, VIEW_TYPES } from "../state/reducers";
import ListCard from "./molecules/ListCard";

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
		<Box style={{ flex: "1" }}>
			<Grid container spacing={2}>
				{filteredDeals.map((deal: Deal) => {
					return (
						<Grid item xs={3}>
							{view === VIEW_TYPES.GRID ? (
								<GridCard deal={deal} />
							) : (
								<ListCard deal={deal} />
							)}
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default ResultList;
