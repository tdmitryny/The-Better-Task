import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
    activeTag: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ACTIVE_TAG":
            return { activeTag: action.payload };
        default:
            return state;
    }
};

export const store = createStore(reducer, composeWithDevTools());
