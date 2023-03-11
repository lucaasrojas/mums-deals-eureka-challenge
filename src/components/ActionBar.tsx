import React from "react";
import { Box, Typography, Button } from "@mui/material";

import { useSelector } from "react-redux";
import { State } from "../types";
import ViewSelector from "./molecules/ViewSelector";
import Sorter from "./molecules/Sorter";

const styles = {
	box: {
		height: "40px",
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
		<Box sx={styles.box}>
			<Typography>Available Deals: {deals.length}</Typography>
			<Box sx={styles.buttons}>
				<ViewSelector />
				<Sorter />
			</Box>
		</Box>
	);
};

export default ActionBar;
