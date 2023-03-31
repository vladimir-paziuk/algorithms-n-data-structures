const input1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const input2 = [[1, 4], [4, 5]]; // [[1, 5]]

/*
    1 Sort by first cell
    2 Set first item as first in result
    3 Compare in loop second of recent item in result with first of current
    3.1 If number is greater set max value of second cell from the recent and current
    3.2 If no push new item to result
*/

function merge(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }

    intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    let result = [intervals[0]];

    for (let interval of intervals) {
        let recentInterval = result[result.length - 1];
        if (recentInterval[1] >= interval[0]) {
            recentInterval[1] = Math.max(recentInterval[1], interval[1]);
        } else {
            result.push(interval);
        }
    }
    return result;
}

console.log(merge(input1));
console.log(merge(input2));
