let new_arr = new Array();
let flat = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "object") {
            flat(arr[i]);
        }
        else {
            new_arr.push(arr[i]);
        }
    }

    return new_arr
}

console.log(flat([[2, 3], 5, [[[2, 9], 4], 4], 1, 0]));
