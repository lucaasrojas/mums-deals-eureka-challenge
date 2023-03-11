import React from "react";
import { Grid, Typography } from "@mui/material";
import SideBar from "./SideBar";
import ActionBar from "../molecules/ActionBar";
import ResultList from "./ResultList";

const styles = {
	container: { display: "flex", paddingLeft: "300px", paddingTop: "50px" },
	title_wrapper: {
		minHeight: 120,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
};

const DealsPage = () => {
	return (
		<>
			<SideBar />

			<Grid container sx={styles.container}>
				<Grid item xs={12} style={styles.title_wrapper}>
					<Typography variant="h2">Mum's Deal Page</Typography>
				</Grid>
				<Grid container spacing={2} sx={{ height: "100%" }}>
					<Grid item xs container spacing={6} sx={{ display: "flex" }}>
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
