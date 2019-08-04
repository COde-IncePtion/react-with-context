import React from 'react';
import './App.css';
import DisplayCustomerDetails from "./components/displayCustomerDetails";
import {customerData, UserProvider} from "./context/UserContext";
import CustomerDetailsForm from "./components/customerDetailsForm";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.updateCustomerData = (data) => {
            this.setState({
                customerData: data
            });
        };

        this.resetCustomerData = () => {
            this.setState({
                customerData: {}
            });
        };

        this.state = {
            customerData: customerData,
            resetCustomerData: this.resetCustomerData,
            updateCustomerData: this.updateCustomerData
        };
    }

    render() {
        return (
            <UserProvider value={this.state}>
                <DisplayCustomerDetails/>
                <CustomerDetailsForm/>
            </UserProvider>
        );
    }
}

export default App;
