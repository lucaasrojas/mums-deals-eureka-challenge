import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { GridCardProps } from "../../types";

const ListCard: React.FC<GridCardProps> = (props) => {
	const { image, title, product_type, quantitySold } = props.deal;
	return (
		<Grid
			container
			spacing={2}
			sx={{
				display: "flex",
				height: 200,
				padding: "10px",
				borderRadius: 3,
				border: "1px solid hsl(0deg 0% 63% / 0.36)",
				boxShadow: `0px 0.5px 0.6px hsl(0deg 0% 63% / 0.36),
        0.1px 1.5px 1.7px -0.8px hsl(0deg 0% 63% / 0.36),
        0.3px 3.7px 4.2px -1.7px hsl(0deg 0% 63% / 0.36),
        0.8px 9px 10.2px -2.5px hsl(0deg 0% 63% / 0.36);`,
			}}
		>
			<Box sx={{ width: 200, height: "100%" }}>
				<img
					src={image.src}
					alt={title}
					style={{ width: "100%", height: "100%", objectFit: "contain" }}
				/>
			</Box>
			<Grid item xs container sx={{ display: "flex", alignContent: "start" }}>
				<Grid item xs={12} sx={{ height: "fit-content" }}>
					<Typography variant="h5">{title}</Typography>
				</Grid>
				<Grid item xs={12} sx={{ height: "fit-content" }}>
					<Typography variant="overline">
						{product_type} | Quantity Sold: {quantitySold}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ListCard;
