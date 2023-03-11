import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
	ACTION_TYPES,
	Deal,
	SORT_LABELS,
	SORT_OPTIONS,
	State,
} from "../../types";
import { useDispatch, useSelector } from "react-redux";

const Sorter = () => {
	const { sortBy, filteredDeals } = useSelector((state: State) => state);
	const dispatch = useDispatch();

	React.useEffect(() => {
		sortDeals();
	}, [sortBy]);

	const sortDeals = useCallback(() => {
		const newFilteredDeals = [...filteredDeals];
		switch (sortBy) {
			case SORT_OPTIONS.ASC:
				newFilteredDeals.sort((a, b) => {
					if (a.title < b.title) return -1;
					if (a.title > b.title) return 1;
					return 0;
				});
				break;
			case SORT_OPTIONS.DESC:
				newFilteredDeals.sort((a, b) => {
					if (a.title < b.title) return 1;
					if (a.title > b.title) return -1;
					return 0;
				});
				break;
			case SORT_OPTIONS.HIGHER_PRICE:
				newFilteredDeals.sort((a, b) => {
					const aPrices = a.variants.map((x) => x.price * 1);
					const bPrices = b.variants.map((x) => x.price * 1);
					if (Math.max(...aPrices) > Math.max(...bPrices)) return 1;
					if (Math.max(...aPrices) < Math.max(...bPrices)) return -1;
					return 0;
				});
				break;
			case SORT_OPTIONS.LOWER_PRICE:
				newFilteredDeals.sort((a, b) => {
					const aPrices = a.variants.map((x) => x.price * 1);
					const bPrices = b.variants.map((x) => x.price * 1);
					if (Math.max(...aPrices) > Math.max(...bPrices)) return -1;
					if (Math.max(...aPrices) < Math.max(...bPrices)) return 1;
					return 0;
				});
				break;
		}

		dispatch({
			type: ACTION_TYPES.SET_FILTERED_DEALS,
			payload: newFilteredDeals,
		});
	}, [filteredDeals, sortBy]);

	const handleChange = (event: SelectChangeEvent) => {
		dispatch({
			type: ACTION_TYPES.SET_SORT_BY,
			payload: event.target.value as string,
		});
	};
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Sort By</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
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
