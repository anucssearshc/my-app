/** Purpose:
 *  This component is created as a sample page container
 *  which needs to be changed and moved to new folder
 *  by the subsequent feature PRs
 **/

import * as React from "react";
import { BrowserRouter as Router,Link } from "react-router-dom";


import Routes from "./Routes.jsx";

import "./PageContainer.scss";


export default class PageContainer extends React.Component {

    // this constructor is necessary to make the props work
    constructor(props) {
        super(props);
    }

    render() {

        return (<React.Fragment>
                <React.Fragment>
                    <Router basename={process.env.PUBLIC_URL}>
                                                <div>
                                <Link to="/help" >Help</Link><br />
                                <Link to="/parts/123">Parts</Link><br />
                                <div className="jumbotron">
                                    <Routes />
                                </div>
                            </div>
                        </Router>
                      
                      </React.Fragment>

        </React.Fragment>);
    }
}
