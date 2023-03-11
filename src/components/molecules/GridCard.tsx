import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { GridCardProps } from "../../types";

const GridCard: React.FC<GridCardProps> = (props) => {
	const { image, title, product_type, quantitySold } = props.deal;
	return (
		<Grid
			container
			spacing={3}
			sx={{
				display: "flex",
				padding: "10px",
				borderRadius: 3,
				height: 400,
				border: "1px solid hsl(0deg 0% 63% / 0.36)",
				boxShadow: `0px 0.5px 0.6px hsl(0deg 0% 63% / 0.36),
        0.1px 1.5px 1.7px -0.8px hsl(0deg 0% 63% / 0.36),
        0.3px 3.7px 4.2px -1.7px hsl(0deg 0% 63% / 0.36),
        0.8px 9px 10.2px -2.5px hsl(0deg 0% 63% / 0.36);`,
			}}
		>
			<Box
				sx={{
					borderBottom: "1px solid #D7D7D7",
					height: 180,
					width: "100%",
					paddingBottom: "10px",
				}}
			>
				<img
					src={image.src}
					alt={title}
					style={{ width: "100%", height: "100%", objectFit: "contain" }}
				/>
			</Box>
			<Typography variant="h6" sx={{ textAlign: "center", width: "100%" }}>
				{title}
			</Typography>
			<Typography
				variant="overline"
				sx={{ textAlign: "center", width: "100%" }}
			>
				{product_type} | Quantity Sold: {quantitySold}
			</Typography>
		</Grid>
	);
};

export default GridCard;
