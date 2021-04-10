let deleteItem = (arr, index) => {

    arr.splice(index, 1);
    return arr;

}

console.log(deleteItem([1, 2, 3, 4, 5], 4));

