import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const ThemeToggleSwitch = () => {

    const themeData = useContext(ThemeContext);

    return (<div className="row">
        <div className="col m2 offset-m10">
            <div className="switch">
                <label>
                    dark
                    <input type="checkbox" onClick={themeData.toggleTheme}/>
                    <span className="lever"></span>
                    light
                </label>
            </div>
        </div>
    </div>)

};

export default ThemeToggleSwitch;
