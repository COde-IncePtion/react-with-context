import React from 'react';
import './App.css';
import DisplayCustomerDetails from "./components/displayCustomerDetails";
import {UserProvider, customerData} from "./context/User";
import {ThemeProvider, theme} from "./context/Theme";
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

    toggleTheme = () => {
        this.setState({
            theme: {
                themeData: JSON.stringify(this.state.theme.themeData) === JSON.stringify(theme.dark) ? theme.light : theme.dark,
                toggleTheme: this.toggleTheme
            }
        });
    };

    state = {
        user: {
            customerData: customerData,
            resetCustomerData: this.resetCustomerData,
            updateCustomerData: this.updateCustomerData
        },
        theme: {
            themeData: theme.dark,
            toggleTheme: this.toggleTheme
        }
    };

    render() {
        return (
            <ThemeProvider value={this.state.theme}>
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
