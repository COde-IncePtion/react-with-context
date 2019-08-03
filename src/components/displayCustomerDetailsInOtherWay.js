import React, {Component} from 'react';
import {UserContext} from "../context/UserContext";

class DisplayCustomerDetailsInOtherWay extends Component {
    render() {
        return (
            <>
                <p>{this.context.customerData.firstName}</p>
                <p>{this.context.customerData.lastName}</p>
                <button onClick={this.context.resetCustomerData}>Reset</button>
            </>
        );
    }
}

DisplayCustomerDetailsInOtherWay.contextType = UserContext;
export default DisplayCustomerDetailsInOtherWay;
