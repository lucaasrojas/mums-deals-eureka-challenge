import { Box, Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { VIEW_TYPES, ACTION_TYPES, State } from "../../types";
import ViewListIcon from "@mui/icons-material/ViewList";
import WindowIcon from "@mui/icons-material/Window";
const ViewSelector = () => {
	const { view, deals } = useSelector((state: State) => state);
	const dispatch = useDispatch();
	return (
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
	);
};

export default ViewSelector;
