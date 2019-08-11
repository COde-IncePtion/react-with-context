import React from 'react';
import {ThemeConsumer} from '../context/Theme';

const ThemeToggleSwitch = () => (
    <ThemeConsumer>
        {
            ({toggleTheme}) => (
                <div className="switch">
                    <label>
                        dark
                        <input type="checkbox" onClick={toggleTheme} />
                        <span className="lever"></span>
                        light
                    </label>
                </div>
            )
        }
    </ThemeConsumer>
);

export default ThemeToggleSwitch;
