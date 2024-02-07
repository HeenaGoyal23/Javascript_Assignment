let num = 8046957321;//num declaraton and initialization
const arr = []; //empty array to store every digit of num

//loop iterating over every digit of num and separately storing in array
while (parseInt(num) > 0) {//checking if num is greater than 0 i.e num has any digit left in it.
    const digit = parseInt(num) % 10;//fetching the last digit of num left, parseInt to ensure integer value is getting stored without decimals
    arr.push(digit);//inserting digit to arr
    num = num / 10;//removing the last digit from num by dividing with 10
}
console.log(sortArray(arr));//calling function and printing result

//function declaration
function sortArray(arr) {
    //loop iterating over array one less than the number of times same as number of elements in array
    for (let i = 0; i < arr.length - 1; i++) {
        //loop iterating over elements in array to compare two elements excluding the sorted part
        for (let j = 0; j < arr.length - i - 1; j++) {
            //comparing if previous element is greater than next element
            if (arr[j] > arr[j + 1]) {
                //swapping values if condition satisfied
                arr[j] = arr[j] + arr[j + 1];
                arr[j + 1] = arr[j] - arr[j + 1];
                arr[j] = arr[j] - arr[j + 1];
            }
        }
    }
    return arr;//returning sorted array
}