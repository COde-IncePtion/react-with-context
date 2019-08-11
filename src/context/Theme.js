import React from "react";

export const theme = {
    dark: {
        backgroundColor: "blue-grey darken-1",
        buttonColor: "waves-light",
        textColor: "white",
    },
    light: {
        backgroundColor: "light-green lighten-1",
        textColor: "black",
        buttonColor: "blue-grey darken-1",
    }
};

export const Theme = React.createContext();
export const {Provider: ThemeProvider, Consumer: ThemeConsumer} = Theme;


