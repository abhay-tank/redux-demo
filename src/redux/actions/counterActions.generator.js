import counterActionTypes from "../constants/counterAction.types";

const actionObjectGenerator = (actionType) => {
	switch (actionType) {
		case counterActionTypes.INCREMENT:
			return {
				type: counterActionTypes.INCREMENT,
			};

		case counterActionTypes.DECREMENT:
			return {
				type: counterActionTypes.DECREMENT,
			};
		default:
			return {
				type: "Invalid action",
			};
	}
};

export default actionObjectGenerator;
