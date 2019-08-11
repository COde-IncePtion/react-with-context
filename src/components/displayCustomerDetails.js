import React, {Component} from 'react';
import {UserConsumer} from "../context/User";
import {ThemeConsumer} from "../context/Theme";

class DisplayCustomerDetails extends Component {
    render() {
        return (
            <ThemeConsumer>
                {
                    ({themeData: {backgroundColor, textColor, buttonColor}}) => (
                        <UserConsumer>
                            {
                                ({customerData, resetCustomerData}) => (
                                    <div className="row">
                                        <div className="col s8 m6 offset-m3">
                                            <div className={`card ${backgroundColor}`}>
                                                <div className={`card-content ${textColor}`}>
                                                    <span className="card-title">Customer Details</span>
                                                    <div className="row">
                                                        <div className="col l1">
                                                            <p>Name:</p>
                                                        </div>
                                                        <div className="col l3">
                                                            <p>{
                                                                customerData.firstName} {
                                                                customerData.lastName}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col l2">
                                                            <p>Phone Number:</p>
                                                        </div>
                                                        <div className="col l3">
                                                            <p>{
                                                                customerData.phoneNumber}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col l1">
                                                            <p>Email:</p>
                                                        </div>
                                                        <div className="col l2">
                                                            <p>{
                                                                customerData.email}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col l1">
                                                            <p>Age:</p>
                                                        </div>
                                                        <div className="col l2">
                                                            <p>{
                                                                customerData.age}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-action">
                                                    <button className={`waves-effect ${buttonColor} btn`}
                                                            onClick={resetCustomerData}>
                                                        Reset
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </UserConsumer>
                    )
                }
            </ThemeConsumer>
        );
    }
}

export default DisplayCustomerDetails;
