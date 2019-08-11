import React from 'react';
import {ThemeConsumer} from '../context/Theme';

const ThemeToggleSwitch = () => (
    <ThemeConsumer>
        {
            ({toggleTheme}) => (
                <div className="row">
                    <div className="col m2 offset-m10">
                        <div className="switch">
                            <label>
                                dark
                                <input type="checkbox" onClick={toggleTheme} />
                                <span className="lever"></span>
                                light
                            </label>
                        </div>
                    </div>
                </div>

            )
        }
    </ThemeConsumer>
);

export default ThemeToggleSwitch;
