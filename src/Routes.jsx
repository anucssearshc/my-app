/**Purpose:
 * This component contains sample routes that needs
 ** to be updated by the susequent feature related PRs **/

import * as React from "react";
import {Route, Switch} from "react-router-dom";
import {Help} from "./Help.jsx";
import {Parts} from "./Parts.jsx";
import App  from "./App.js";

class Routes extends React.Component {

  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/" component={App} />
          <Route path="/help" component={Help} />
          <Route path="/parts/:partnum" exact component={Parts} />
        </Switch>
      </div>
    )
  }
}

export default Routes;
