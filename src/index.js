import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import showSecondBox from "./components/Context";
import { Provider } from "react-redux";
import { store } from "./store";

function Main() {
    const [state, setState] = useState(true);

    return (
        <React.StrictMode>
            <Provider store={store}>
                <showSecondBox.Provider value={{ state, setState }}>
                    <App />
                </showSecondBox.Provider>
            </Provider>
        </React.StrictMode>
    );
}

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
