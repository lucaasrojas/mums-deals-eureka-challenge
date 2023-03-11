import React from "react";
import { Grid, Typography } from "@mui/material";
import { getDeals } from "../../api";
import GridCard from "../molecules/GridCard";
import { useDispatch, useSelector } from "react-redux";
import ListCard from "../molecules/ListCard";
import { State, Deal, VIEW_TYPES } from "../../types";
import { setDeals, setFilteredDeals } from "../../state/actions";

const ResultList = () => {
	const dispatch = useDispatch();
	const { view, filteredDeals } = useSelector((state: State) => state);
	const [isLoading, setIsLoading] = React.useState(false);
	React.useEffect(() => {
		setIsLoading(true);
		getDeals().then((res) => {
			dispatch(setDeals(res.data));
			dispatch(setFilteredDeals(res.data));
			setIsLoading(false);
		});
	}, []);

	return (
		<Grid
			container
			spacing={5}
			sx={{
				padding: 2,
			}}
		>
			{isLoading ? (
				<Typography variant="overline" style={{ margin: "auto" }}>
					Loading...
				</Typography>
			) : (
				filteredDeals.map((deal: Deal) => {
					return view === VIEW_TYPES.GRID ? (
						<Grid item xs={3}>
							<GridCard deal={deal} />
						</Grid>
					) : (
						<Grid item xs={12}>
							<ListCard deal={deal} />
						</Grid>
					);
				})
			)}
		</Grid>
	);
};

export default ResultList;
