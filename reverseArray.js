const reverseArray = (arr) =>{
    var newArray = []
    for (let i = arr.length - 1; i >= 0; i--){
        newArray.push(arr[i]);
    }
    console.log(newArray);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
reverseArray(arr)

// method 2 using unshift

const revArr = [];
arr.forEach((element)=>{
    revArr.unshift(element);
})
console.log("method 2", revArr);

