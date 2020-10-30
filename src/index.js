import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./styles.css";

import Country from "./country";
import Continent from "./continent";

function App() {
    return (
        <Router>
            <Fragment>
                <Route path="/continent" component={Continent} />
                <Route path="/country" component={Country} />
            </Fragment>
        </Router>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
