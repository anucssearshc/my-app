/**Purpose:
 * This component is created as a sample for
 * routing and page navigation implementation
**/
import * as React from "react";
import { } from "react-router"

export class Help extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="help">
                <div className="">
                    Routed to Help Page
                    <div className="help__caption">
                        Help Page
                    </div>
                </div>

                <br/>

                <div className="help help--modifier">
                    Repair Help
                    
                </div>
            </div>
        )
    }
}
