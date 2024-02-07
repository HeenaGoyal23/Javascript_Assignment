const arr = [-2, 5, 3, -8, 10, -4];//array initialization
console.log(sumOfPostives(arr));//calling function and printing sum


//function declaration
function sumOfPostives(arr) {
    let sum = 0; //initializing sum variable with 0;

    //loop iterating over each value of array
    arr.forEach(value => {
        //checking if value is greater than 0 i.e a positive number
        if (value > 0) {
            sum += value; //adding element to sum if condition satisfied
        }
    })

    // arr.forEach(value => {
    //     sum += value>0?value:0;
    // });
    return sum; //returning sum of positive numbers in array
}