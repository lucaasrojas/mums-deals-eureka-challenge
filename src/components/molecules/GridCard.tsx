import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Deal } from "../ResultList";
interface GridCardProps {
	deal: Deal;
}

const GridCard: React.FC<GridCardProps> = (props) => {
	const { image, title, product_type } = props.deal;
	return (
		<Box>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<img
						src={image.src}
						alt={title}
						style={{ width: "100%", height: 180, objectFit: "contain" }}
					/>
				</Grid>
				<Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
					<Typography>{title}</Typography>
				</Grid>
				<Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
					<Typography>{product_type}</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default GridCard;
