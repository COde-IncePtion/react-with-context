import React from "react";

export const theme = {
    dark: {
        backgroundColor: "blue-grey darken-1",
        buttonColor: "waves-light",
        textColor: "white-text",
    },
    light: {
        backgroundColor: "light-blue lighten-4",
        textColor: "grey darken-3",
        buttonColor: "red",
    }
};

export const Theme = React.createContext();
export const {Provider: ThemeProvider, Consumer: ThemeConsumer} = Theme;


