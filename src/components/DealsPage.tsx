import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";
import SideBar from "./SideBar";
import ActionBar from "./ActionBar";
import ResultList from "./ResultList";
const DealsPage = () => {
	return (
		<>
			<SideBar />

			<Grid container sx={{ display: "flex", paddingLeft: "300px" }}>
				<Grid
					item
					xs={12}
					style={{
						height: 120,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography variant="h2">Mum's Deal Page</Typography>
				</Grid>
				<Grid container spacing={2} sx={{ height: "100%" }}>
					<Grid item xs container spacing={2} sx={{ display: "flex" }}>
						<Grid item xs={12}>
							<ActionBar />
						</Grid>
						<Grid item xs={12}>
							<ResultList />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default DealsPage;
