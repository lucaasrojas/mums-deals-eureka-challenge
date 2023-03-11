import React from "react";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import OptionGroup from "../molecules/OptionGroup";
import { State, Deal } from "../../types";
import Sorter from "../molecules/Sorter";
import ViewSelector from "../molecules/ViewSelector";

const styles = {
	container: {
		padding: "24px",
		display: "flex",
		alignContent: "center",
		justifyContent: "center",

		position: "fixed",
		top: 0,
		left: 0,
		width: "250px",
		height: "100%",
	},
};

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
		<Grid container boxShadow={2} spacing={2} sx={styles.container}>
			<Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
				<Sorter />
			</Grid>
			<Grid item xs={12}>
				<OptionGroup options={categories} title="Product Types" />
			</Grid>
		</Grid>
	);
};

export default SideBar;
