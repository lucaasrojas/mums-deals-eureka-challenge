import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { GridCardProps } from "../../types";
const styles = {
	container: {
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
		minHeight: "200px",
		minWidth: 200,
		height: "fit-content",
		padding: "10px",
		borderRadius: 3,
		border: "1px solid hsl(0deg 0% 63% / 0.36)",
		boxShadow: `0px 0.5px 0.6px hsl(0deg 0% 63% / 0.36),
        0.1px 1.5px 1.7px -0.8px hsl(0deg 0% 63% / 0.36),
        0.3px 3.7px 4.2px -1.7px hsl(0deg 0% 63% / 0.36),
        0.8px 9px 10.2px -2.5px hsl(0deg 0% 63% / 0.36);`,
	},
	box: { width: "100%", height: "100%", maxWidth: 200 },
	title: {
		height: "fit-content",
	},
	detail: {
		height: "fit-content",
	},
};
const ListCard: React.FC<GridCardProps> = (props) => {
	const { image, title, product_type, quantitySold } = props.deal;
	return (
		<Grid container spacing={2} sx={styles.container}>
			<Box sx={styles.box}>
				<img
					src={image.src}
					alt={title}
					style={{
						width: "100%",
						height: "100%",
						maxHeight: 180,
						objectFit: "contain",
					}}
				/>
			</Box>
			<Grid
				item
				xs={12}
				md
				container
				sx={{ display: "flex", alignContent: "start" }}
			>
				<Grid item xs={12} sx={styles.title}>
					<Typography variant="h5">{title}</Typography>
				</Grid>
				<Grid item xs={12} sx={styles.detail}>
					<Typography variant="overline">
						{product_type} | Quantity Sold: {quantitySold}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ListCard;
