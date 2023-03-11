import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import { useSelector } from "react-redux";
import { State } from "../../types";
import ViewSelector from "./ViewSelector";
import Sorter from "./Sorter";

const styles = {
	box: {
		minHeight: "40px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 2,
	},
	buttons: { display: "flex", flexDirection: "row", alignItems: "center" },
};

const ActionBar = () => {
	const { deals } = useSelector((state: State) => state);
	return (
		<Grid container sx={styles.box}>
			<Grid item>
				<Typography>Available Deals: {deals.length}</Typography>
			</Grid>
			<Grid item sx={styles.buttons}>
				<ViewSelector />
			</Grid>
		</Grid>
	);
};

export default ActionBar;
