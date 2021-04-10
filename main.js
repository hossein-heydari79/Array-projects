let getNumber = (str) => {

    let new_arr = new Array();
    let arr = str.split(" ");

    for (let i of arr) {
        if (isNaN(+i) != true) {
            new_arr.push(+i);
        }

    }

    return new_arr;

}

console.log(getNumber("hossein is 21 years old : 285"));