import React from "react";

export const customerData = {
    firstName: "Ani",
    lastName: "Joseph",
    age: 40
};

export const resetCustomerData = () => {
    console.log("hey there from resetCustomerData");
};

export const UserContext = React.createContext({customerData, resetCustomerData});
export const {Provider: UserProvider, Consumer: UserConsumer} = UserContext;

