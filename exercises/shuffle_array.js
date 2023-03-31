// Fisher-Yates shuffle

// O(n)
// O(1) - Memory

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let shuffle = function (arr) {
    for (let i = arr.length - 1; i > 0 ; i--) {
        let tmp = arr[i];
        let rnd = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[rnd];
        arr[rnd] = tmp;
    }
    return arr;
}

// Run
for (let i = 0; i < 10; i++) {
    console.log(shuffle(input).join(','));
}