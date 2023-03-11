import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Deal } from "../../state/reducers";

interface GridCardProps {
	deal: Deal;
}
const ListCard: React.FC<GridCardProps> = (props) => {
	const { image, title, product_type } = props.deal;
	return (
		<Box>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<img
						src={image.src}
						alt={title}
						style={{ width: "100%", height: 70, objectFit: "contain" }}
					/>
				</Grid>
				<Grid item xs container>
					<Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
						<Typography>{title}</Typography>
					</Grid>
					<Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
						<Typography>{product_type}</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ListCard;
