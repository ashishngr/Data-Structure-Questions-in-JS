function moveNagativeElemetAside(arr, n){
    // arr = array
    // n = length of array;
    let left = 0;
    let right = n - 1;
    let temp;
   while(left < right){
       if(arr[left] < 0 && arr[right] < 0){
           right--;
       }
       if(arr[left] >= 0 && arr[right] <0){
           right--;
       }
       if(arr[left] >= 0 && arr[right] >=0){
           left++;
       }
       if(arr[left] < 0 && arr[right]>=0){
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        right--;
       }
   }
   console.log(arr);
}
let array = [-5, 7, -3, -4, 9, 10, -1, 11];
const result = moveNagativeElemetAside(array,8);
// console.log("output", moveNagativeElemetAside(array,8));