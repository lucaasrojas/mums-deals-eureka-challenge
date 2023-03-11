import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SORT_LABELS, SORT_OPTIONS, State } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredDeals, setSortBy } from "../../state/actions";
import { sortDeals } from "../../utils";

const Sorter = () => {
	const { sortBy, filteredDeals } = useSelector((state: State) => state);
	const dispatch = useDispatch();

	const handleChange = (event: SelectChangeEvent) => {
		dispatch(setSortBy(event.target.value as SORT_OPTIONS));
		dispatch(setFilteredDeals(sortDeals(filteredDeals, event.target.value)));
	};
	return (
		<Box sx={{ width: "120px" }}>
			<FormControl fullWidth>
				<InputLabel id="select-label">Sort By</InputLabel>
				<Select
					labelId="select-label"
					id="simple-select"
					value={sortBy || ""}
					label="Sort By"
					onChange={handleChange}
				>
					{Object.entries(SORT_LABELS).map(([key, value]) => (
						<MenuItem value={key}>{value}</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default Sorter;
