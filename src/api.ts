import axios from "axios";

const api =
	"https://kabsa.yallababy.com/api/v1/products/best-selling-products-by-subcategory";
const secret = "1DIPIkKeq8";

export const getDeals = () => {
	return axios.get(api, {
		headers: {
			secretKey: secret,
		},
	});
};
