import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const rootElement = document.getElementById("root");



function switchMode() {
    const bodyElement = document.querySelector('body');
    bodyElement.classList.add("dark-mode");
}

function switchBack() {
    const bodyElement = document.querySelector('body');
    bodyElement.classList.remove("dark-mode");
}

//function
export const useDarkMode = initialValue => {

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue);


    useEffect(() => {
        if (darkMode === true) {
            switchMode();
        } else if (darkMode === false) {
            switchBack();
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

