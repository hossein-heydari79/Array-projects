let concatArray = (...arr) => {
    let new_arr = new Array();
    for (let i = 0; i < arr.length; i++) {
        new_arr = new_arr.concat(arr[i]);
    }

    return new_arr;
}


console.log(concatArray([3, 4, 12], [7, 8, 9, 10], [1, 2], [5, 6]).sort(function (a, b) { return a - b }));