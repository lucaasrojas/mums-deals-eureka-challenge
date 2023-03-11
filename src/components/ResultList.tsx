import React from "react";
import { Box, Grid } from "@mui/material";
import { getDeals } from "../api";
import GridCard from "./molecules/GridCard";
import { useSelector } from "react-redux";
import { State, VIEW_TYPES } from "../state/reducers";
import ListCard from "./molecules/ListCard";

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

const ResultList = () => {
	const [deals, setDeals] = React.useState<any>([]);
	const view = useSelector((state: State) => state.view);
	React.useEffect(() => {
		getDeals().then((res) => {
			setDeals(res.data);
		});
	}, []);

	return (
		<Box style={{ flex: "1" }}>
			<Grid container spacing={2}>
				{deals.map((deal: Deal) => {
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
