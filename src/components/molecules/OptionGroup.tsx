import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { State, Deal } from "../../types";
import { sortDeals, toCamelCase } from "../../utils";
import { setFilteredDeals, setSortBy } from "../../state/actions";

const OptionGroup = (props) => {
	const { deals, sortBy } = useSelector((state: State) => state);
	const dispatch = useDispatch();
	const [selected, setSelected] = React.useState<string>();
	const { title, options } = props;

	const handleChange = (e) => {
		const name = e.target.name;
		if (name === selected) {
			setSelected("");
			dispatch(setFilteredDeals(sortDeals(deals, sortBy)));
		} else {
			setSelected(name);

			const filteredDeals = deals.filter((deal: Deal) => {
				if (deal.product_type === name) {
					return deal;
				}
			});
			dispatch(setFilteredDeals(sortDeals(filteredDeals, sortBy)));
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
