import axios from "axios";

export const removeFromCart = async ({ dispatch, _id }) => {
	try {
		await dispatch({
			type: "REMOVE_FROM_CART",
			_id
		});
	} catch (err) {
		console.log(err);
	}
};

export const addQuantityByProduct = async ({ dispatch, _id }) => {
	try {
		return await dispatch({
			type: "ADD_QUANTITY",
			_id
		});
	
	} catch (err) {
		console.log(err);
	}
};



export const subtractQuantityByProduct = async ({ dispatch, _id }) => {
	try {
		await dispatch({
			type: "SUBTRACT_QUANTITY",
			_id
		});
	} catch (err) {
		console.log(err);
	}
};

export const addToCart = async ({ dispatch, payload }) => {
	try {
		await dispatch({
			type: "ADD_TO_CART",
			payload
		});
	} catch (err) {
		console.log(err);
	}
};


export const getCartQuantity =  async ({ dispatch, payload}) => {
	try {
		await dispatch ({
			type: "GET_CART_QUANTITY",
			payload
		});
	} catch (err) {
		console.log(err);
	}
}


export const getCartTotal = async ({dispatch, payload}) => {
	try {
		 await dispatch ({
			type: "GET_CART_TOTAL",
			payload
		});
	} catch (err) {
		console.log(err);
	}
}

export const addSlug = async ({ dispatch, slug }) => {
	try {
		await dispatch({
			type: "ADD_SLUG",
			slug
		});
	} catch (err) {
		console.log(err);
	}
};

export const addHotelName = async ({ dispatch, hotel_name }) => {
	try {
		await dispatch({
			type: "ADD_HOTEL_NAME",
			hotel_name
		});
	} catch (err) {
		console.log(err);
	}
};


export const addEmail = async ({ dispatch, email }) => {
	try {
		await dispatch({
			type: "ADD_EMAIL",
			email
		});
	} catch (err) {
		console.log(err);
	}
};


export const clearStore = async ({ dispatch}) => {
	try {
		await dispatch({
			type: "CLEAR_STORE",
		});
	} catch (err) {
		console.log(err);
	}
};