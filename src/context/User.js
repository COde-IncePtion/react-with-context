import React from "react";

export const customerData = {
    firstName: "Ani",
    lastName: "Joseph",
    age: 40,
    phoneNumber: "8888899990",
    email: "ani@gmail.com"
};


export const User = React.createContext();
export const {Provider: UserProvider, Consumer: UserConsumer} = User;

