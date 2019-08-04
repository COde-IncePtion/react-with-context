import React, {Component} from 'react';
import {UserConsumer} from "../context/UserContext";

class DisplayCustomerDetails extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    context => (
                        <div className="row">
                            <div className="col s8 m6 offset-m3">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">Customer Details</span>
                                        <div className="row">
                                            <div className="col l1">
                                                <p>Name:</p>
                                            </div>
                                            <div className="col l3">
                                                <p>{context.customerData.firstName} {context.customerData.lastName}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col l2">
                                                <p>Phone Number:</p>
                                            </div>
                                            <div className="col l3">
                                                <p>{context.customerData.phoneNumber}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col l1">
                                                <p>Email:</p>
                                            </div>
                                            <div className="col l2">
                                                <p>{context.customerData.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col l1">
                                                <p>Age:</p>
                                            </div>
                                            <div className="col l2">
                                                <p>{context.customerData.age}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-action">
                                        <button className="waves-effect waves-light btn"
                                                onClick={context.resetCustomerData}>Reset
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </UserConsumer>
        );
    }
}

export default DisplayCustomerDetails;
