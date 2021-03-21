import React, {useContext} from 'react';
import {UserConsumer} from "../context/User";
import {ThemeContext} from "../context/ThemeContext";

const DisplayCustomerDetails = () => {
    const themeData = useContext(ThemeContext);

    return (
        <UserConsumer>
            {
                ({customerData, resetCustomerData}) => (

                    <div className="row">
                        <div className="col s8 m6 offset-m3">
                            <div className={`card ${themeData.theme.backgroundColor}`}>
                                <div className={`card-content`} style={{color: themeData.theme.textColor}}>
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
                                    <button className={`waves-effect ${themeData.theme.buttonColor} btn`}
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
    );
}

export default DisplayCustomerDetails;
