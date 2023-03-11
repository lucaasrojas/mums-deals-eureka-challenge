import React from "react";
import { Box, Typography, Button } from "@mui/material";

import { useSelector } from "react-redux";
import { State } from "../types";
import ViewSelector from "./molecules/ViewSelector";
import Sorter from "./molecules/Sorter";
const ActionBar = () => {
	const { deals } = useSelector((state: State) => state);
	return (
		<Box
			sx={{
				height: "40px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: 2,
			}}
		>
			<Typography>Available Deals: {deals.length}</Typography>
			<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
				<ViewSelector />
				<Sorter />
			</Box>
		</Box>
	);
};

export default ActionBar;
