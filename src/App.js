import React from 'react';
import './App.css';
import DisplayCustomerDetails from "./components/displayCustomerDetails";
import {UserProvider, customerData} from "./context/User";
import {ThemeProvider} from "./context/ThemeContext";
import CustomerDetailsForm from "./components/customerDetailsForm";
import ThemeToggleSwitch from "./components/appThemeSelection";


class App extends React.Component {

    updateCustomerData = (data) => {
        this.setState({
            user: {
                customerData: data,
                resetCustomerData: this.resetCustomerData,
                updateCustomerData: this.updateCustomerData
            }
        });
    };

    resetCustomerData = () => {
        this.setState({
            user: {
                customerData: {},
                resetCustomerData: this.resetCustomerData,
                updateCustomerData: this.updateCustomerData
            }
        });
    };

    state = {
        user: {
            customerData: customerData,
            resetCustomerData: this.resetCustomerData,
            updateCustomerData: this.updateCustomerData,
        }
    };

    render() {
        return (
            <ThemeProvider>
                <UserProvider value={this.state.user}>
                    <ThemeToggleSwitch/>
                    <DisplayCustomerDetails/>
                    <CustomerDetailsForm/>
                </UserProvider>
            </ThemeProvider>
        );
    }
}

export default App;
