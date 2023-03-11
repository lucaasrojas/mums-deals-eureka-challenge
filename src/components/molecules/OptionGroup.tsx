import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { State, ACTION_TYPES, Deal } from "../../types";
import { toCamelCase } from "../../utils";

const OptionGroup = (props) => {
	const { deals } = useSelector((state: State) => state);
	const dispatch = useDispatch();
	const [selected, setSelected] = React.useState<string>();
	const { title, options } = props;

	const handleChange = (e) => {
		const name = e.target.name;
		if (name === selected) {
			setSelected("");
			dispatch({ type: ACTION_TYPES.SET_FILTERED_DEALS, payload: deals });
		} else {
			setSelected(name);

			const filteredDeals = deals.filter((deal: Deal) => {
				if (deal.product_type === name) {
					return deal;
				}
			});

			dispatch({
				type: ACTION_TYPES.SET_FILTERED_DEALS,
				payload: filteredDeals,
			});
		}
	};
	return (
		<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
			<FormLabel component="legend">{title}</FormLabel>
			<FormGroup>
				{options.map((option) => (
					<FormControlLabel
						control={
							<Checkbox
								checked={option === selected}
								onChange={handleChange}
								name={option}
							/>
						}
						label={toCamelCase(option)}
					/>
				))}
			</FormGroup>
		</FormControl>
	);
};

export default OptionGroup;
