import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Deal, State } from "../state/reducers";
import OptionGroup from "./molecules/OptionGroup";
const SideBar = () => {
	const { deals } = useSelector((state: State) => state);
	const [categories, setCategories] = React.useState<string[]>([]);
	const filterCategories = (deals: Deal[]) => {
		const newCategories = new Set(deals.map((deal) => deal.product_type));
		setCategories(Array.from(newCategories));
	};

	React.useEffect(() => {
		if (deals.length) {
			filterCategories(deals);
		}
	}, [deals]);

	return (
		<Grid container>
			<Grid item xs={12}>
				<Typography>Filter Results</Typography>
			</Grid>
			<Grid item xs={12}>
				<OptionGroup options={categories} title="Product Types" />
			</Grid>
		</Grid>
	);
};

export default SideBar;
