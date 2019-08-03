import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayCustomerDetails from "./components/displayCustomerDetails";
import {UserProvider, customerData} from "./context/UserContext";
import DisplayCustomerDetailsInOtherWay from "./components/displayCustomerDetailsInOtherWay";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.resetCustomerData = () => {
            this.setState({
                customerData: {},
                resetCustomerData: this.resetCustomerData
            });
        };

        this.state = {
            customerData: customerData,
            resetCustomerData: this.resetCustomerData
        };
    }

    render() {
        return (
            <UserProvider value={this.state}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <DisplayCustomerDetails/>
                        <DisplayCustomerDetailsInOtherWay/>
                    </header>
                </div>
            </UserProvider>
        );
    }
}

export default App;
