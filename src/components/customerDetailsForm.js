import React, {Component} from 'react';
import {User, UserConsumer} from "../context/User";
import {ThemeConsumer} from "../context/Theme";


class CustomerDetailsForm extends Component {
    state = {
        customerData: {
            firstName: '',
            lastName: '',
            age: '',
            phoneNumber: ''
        }
    };

    captureUpdate = (event) => {
        const fieldName = event.target.id;
        const value = event.target.value;
        let customerData = this.state.customerData;
        customerData[fieldName] = value;
    };

    render() {
        return (
            <ThemeConsumer>
                {
                    ({themeData: {buttonColor}}) => (
                        <UserConsumer>
                            {
                                ({updateCustomerData}) => (
                                    <div className="row">
                                        <form className="col s8 m6 offset-l3">
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <input id="firstName" type="text" className="validate"
                                                           value={this.state.firstName} onChange={this.captureUpdate}/>
                                                    <label htmlFor="firstName">First Name</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input id="lastName" type="text" className="validate"
                                                           value={this.state.lastName} onChange={this.captureUpdate}/>
                                                    <label htmlFor="lastName">Last Name</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <input id="age" type="text" className="validate"
                                                           value={this.state.age} onChange={this.captureUpdate}/>
                                                    <label htmlFor="age">Age</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input id="phoneNumber" type="tel" className="validate"
                                                           value={this.state.phoneNumber}
                                                           onChange={this.captureUpdate}/>
                                                    <label htmlFor="phoneNumber">Telephone</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input id="email" type="email" className="validate"
                                                           value={this.state.email} onChange={this.captureUpdate}/>
                                                    <label htmlFor="email">Email</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s3">
                                                    <button className={`waves-effect ${buttonColor} btn`}
                                                            type="button"
                                                            onClick={() => updateCustomerData(this.state.customerData)}>
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
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


CustomerDetailsForm.contextType = User;

export default CustomerDetailsForm;
