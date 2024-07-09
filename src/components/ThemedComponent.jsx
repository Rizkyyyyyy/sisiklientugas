import React, { createContext, useState } from 'react';
import ThemeContext, { ThemeProvider } from '../context/ThemeContext';

function ThemedComponent(){
    return (
        <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
            <div style={{ background: theme === 'light' ? '#fff': '#333', color: theme === 'light' ? '#000' : '#fff' }}>
                <p>Current theme: {theme}</p>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        )}
        </ThemeContext.Consumer>
    );
}

export default ThemedComponent
