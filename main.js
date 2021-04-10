let deleteDuplicate = (arr) => {

    let counter = 0;
    let new_arr = new Array();
    new_arr[0] = arr[0];

    for1: for (let i = 1; i < arr.length; i++) {
        for (let h = 0; h < new_arr.length; h++) {
            if (new_arr[h] == arr[i]) {
                counter = 0;
                continue for1;
            }
            else {
                counter++;
            }
        }
        if (counter == new_arr.length) {
            new_arr.push(arr[i]);
        }
        counter = 0;
    }
    return new_arr;
}


console.log(deleteDuplicate([1, 1, 2, 2, 2, 2, 3, 3, 3, 5, 6, 4, 4]));