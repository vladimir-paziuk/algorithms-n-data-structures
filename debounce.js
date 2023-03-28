function debounce(fn, ms) {
    let timeout;
    return function() {
        const fnApply = () => fn.apply(this, arguments);
        clearTimeout(timeout);
        timeout = setTimeout(fnApply, ms);
    }
}

const onChange = e => console.log(e);
const onChangeDebounced = debounce(onChange, 500);