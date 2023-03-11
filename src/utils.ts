import { SORT_OPTIONS } from "./types";

export const toCamelCase = (text) => {
	return text.replace(/^./, function (str) {
		return str.toUpperCase();
	});
};

export const sortDeals = (deals, sortBy) => {
	const newFilteredDeals = [...deals];
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

	return newFilteredDeals;
};
