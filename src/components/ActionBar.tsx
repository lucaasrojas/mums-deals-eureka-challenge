import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import WindowIcon from "@mui/icons-material/Window";
import { useDispatch, useSelector } from "react-redux";
import { State, VIEW_TYPES, ACTION_TYPES } from "../types";
const ActionBar = () => {
	const { view, deals } = useSelector((state: State) => state);
	const dispatch = useDispatch();
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
			<Box sx={{ display: "flex", flexDirection: "row" }}>
				<Box>
					<Button
						sx={{ color: view === VIEW_TYPES.GRID ? "black" : "grey" }}
						onClick={() => {
							if (view !== VIEW_TYPES.GRID)
								dispatch({ type: ACTION_TYPES.SET_GRID_VIEW });
						}}
					>
						<WindowIcon />
					</Button>
					<Button
						sx={{ color: view === VIEW_TYPES.LIST ? "black" : "grey" }}
						onClick={() => {
							if (view !== VIEW_TYPES.LIST)
								dispatch({ type: ACTION_TYPES.SET_LIST_VIEW });
						}}
					>
						<ViewListIcon />
					</Button>
				</Box>
				<Box>
					<Typography>Sort Results</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default ActionBar;
