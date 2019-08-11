import React, {Component} from 'react';
import {User} from "../context/User";

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

DisplayCustomerDetailsInOtherWay.contextType = User;
export default DisplayCustomerDetailsInOtherWay;
