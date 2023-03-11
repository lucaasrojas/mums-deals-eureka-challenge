import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";
import SideBar from "./SideBar";
import ActionBar from "./ActionBar";
import ResultList from "./ResultList";
const DealsPage = () => {
	return (
		<Paper sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
			<Box
				style={{
					height: 120,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography>Mum's Deal Page</Typography>
			</Box>
			<Grid container sx={{ height: "100%" }}>
				<Grid item xs={2}>
					<SideBar />
				</Grid>
				<Grid item xs container>
					<Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
						<ActionBar />
						<ResultList />
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default DealsPage;
