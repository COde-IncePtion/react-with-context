import React, {Component} from 'react';
import {UserConsumer} from "../context/UserContext";

class DisplayCustomerDetails extends Component {
    render() {
        return (
            <UserConsumer>
                 {
                    context => (
                        <>
                            {console.log(context)}
                            <p>{context.customerData.firstName}</p>
                            <p>{context.customerData.lastName}</p>
                            <button onClick={context.resetCustomerData}>Reset</button>
                        </>
                    )
                }
            </UserConsumer>
        );
    }
}
export default DisplayCustomerDetails;
