import React,{useState, createContext} from "react";

const themeData = {
    dark: {
        id:"dark",
        backgroundColor: "blue-grey darken-1",
        buttonColor: "waves-light",
        textColor: "white",
    },
    light: {
        id:"light",
        backgroundColor: "light-green lighten-1",
        textColor: "black",
        buttonColor: "blue-grey darken-1",
    }
};

export const ThemeContext = createContext();

const {Provider, Consumer} = ThemeContext;

export const ThemeProvider = ({children})=>{
    const [theme, setCurrentTheme] = useState(themeData.dark);

    const toggleTheme = ()=>{
        setCurrentTheme(currTheme => currTheme.id==="dark" ? themeData.light: themeData.dark)
    }

    return <Provider value={{theme, toggleTheme}}>
        {children}
    </Provider>
}


