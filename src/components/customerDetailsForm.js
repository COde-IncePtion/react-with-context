import React, {useState, useContext} from 'react';
import {User, UserConsumer} from "../context/User";
import {ThemeContext} from "../context/ThemeContext";


const CustomerDetailsForm = () => {

    const formData = {
        customerData: {
            firstName: '',
            lastName: '',
            age: '',
            phoneNumber: ''
        }
    };

    const captureUpdate = (event) => {
        const fieldName = event.target.id;
        const value = event.target.value;
        custData[fieldName] = value;
        updateCustData({...custData});
    };

    const [custData, updateCustData] = useState(formData)

    const themeData = useContext(ThemeContext);

    return (
        <UserConsumer>
            {
                ({updateCustomerData}) => (
                    <div className="row">
                        <form className="col s8 m6 offset-l3">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="firstName" type="text" className="validate"
                                           value={custData.firstName} onChange={captureUpdate}/>
                                    <label htmlFor="firstName">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="lastName" type="text" className="validate"
                                           value={custData.lastName} onChange={captureUpdate}/>
                                    <label htmlFor="lastName">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="age" type="text" className="validate"
                                           value={custData.age} onChange={captureUpdate}/>
                                    <label htmlFor="age">Age</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="phoneNumber" type="tel" className="validate"
                                           value={custData.phoneNumber}
                                           onChange={captureUpdate}/>
                                    <label htmlFor="phoneNumber">Telephone</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate"
                                           value={custData.email} onChange={captureUpdate}/>
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s3">
                                    <button className={`waves-effect ${themeData.theme.buttonColor} btn`}
                                            type="button"
                                            onClick={() => updateCustomerData(custData)}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )
            }

        </UserConsumer>
    );
}


CustomerDetailsForm.contextType = User;

export default CustomerDetailsForm;
