import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const rootElement = document.getElementById("root");



function switchMode() {
    const bodyElement = document.getElementById('dark');
    // = document.getElementsByClassName("body");
    console.log('hi', bodyElement);
    bodyElement.classList.add("dark-mode");
}

function switchBack() {
    const bodyElement = document.getElementById('dark');
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

// const rootElement = document.getElementById("root");


// function myFunction() {
//     var element = document.getElementById("myDIV");
//     element.classList.toggle("mystyle");
// }


// - Inside the `hooks` directory, add a new file called `useDarkMode`.
// - Build a function called `useDarkMode`.
// - Import `useLocalStorage`
// - Call `useLocalStorage` and pass in the key you want to use to store whether or not dark mode is enabled. Remember, this hook returns an array with a value and a setter in an array, 
// exactly like the state hook, so make sure to capture those values in a `const` - `const [someValue, setSomeValue] = useLocalStorage('your key here')`

// - Call`useLocalStorage` and pass in the key you want to use to store whether or not dark mode is enabled.Remember, this hook returns an array with a value and a setter in an array,
//     exactly like the state hook, so make sure to capture those values in a`const` - `const [someValue, setSomeValue] = useLocalStorage('your key here')`
//         - Now to add the class to the body.If we need to manipulate the DOM directly, how do we do that ? Any direct DOM manipulation is considered a side effect, right ? So let's use the effect hook.
//             - Import and set up your effect hook.
//   - Inside it, check to see if the value from`useLocalStorage` is true or false.
//   - If it's true, add the class `dark-mode` to the `body` element.
//     - If it's false, remove the class from the `body` element. (If you don't quite remember how to do this from ages and ages ago, Google will be your friend here 😉)
// - We don't want this effect to run every time anything in the component changes, right? Think about what piece of data this hook depends on, and should be synced with, and add that in its 
// dependency array.
// - Finally, we need to return something out of here so we can use this in our app.What do you think we'll need? We'll need to know if dark mode is enabled, right ? And we'll need a setter 
// function to toggle dark mode.Let's just forward the value and the setter that were returned out of the `useLocalStorage` call. Return those two values in an array as well.