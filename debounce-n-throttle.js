/*
    Debouncing is a way of delaying the execution of a function until
    a certain amount of time has passed since the last time it was called.
    This can be useful for scenarios where we want to avoid unnecessary
    or repeated function calls that might be expensive or time-consuming.

    https://dev.to/jeetvora331/javascript-debounce-easiest-explanation--29hc

    -e---500ms---run-------e-----------------------------
    ----------------------------e------------------------
    ---------------------------------e---500ms---run-----


    Throttling is a technique that limits how often a function can be called in a given period of time.
    It is useful for improving the performance and responsiveness of web pages that have event listeners
    that trigger heavy or expensive operations, such as animations, scrolling, resizing, fetching data, etc.

    https://dev.to/jeetvora331/throttling-in-javascript-easiest-explanation-1081

    --------e--500ms--run-----------------------------------------
    -----------e-e---------e--500ms--run--------------------------
    ---------------------------------e-e----e--500ms--run---------
 */

const debounce = (fn, ms) => {
    let timeout = null;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), ms);
    };
};

const throttle = (fn, ms) => {
    let timeout = null;

    return (...args) => {
        if (timeout === null) {
            fn(...args);

            timeout = setTimeout(() => {
                timeout = null;
            }, ms);
        }
    };
};

const onEvent = (e) => console.log(e);

const onEventDebounced = debounce(onEvent, 500);
const onEventThrottled = throttle(onEvent, 500);

// onEventDebounced(e);
// onEventThrottled(e);
