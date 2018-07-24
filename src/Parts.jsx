/**Purpose:
 * This component is created as a sample for
 * routing and page navigation implementation
**/

import * as React from "react";
import { } from "react-router";

export class Parts extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                Routed to Parts Page with param {this.props.match.params.partnum}
            </div>
        )
    }
}
