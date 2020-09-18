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
		await dispatch({
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
