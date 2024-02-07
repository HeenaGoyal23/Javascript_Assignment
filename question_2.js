const students = [
    { name: 'Alice', score: 85 },//objects with name and score as keys
    { name: 'Bob', score: 60 },
    { name: 'Charlie', score: 92 },
    { name: 'David', score: 75 }
]; //array declaration and initialization

console.log(getHighScorers(students, 70)); //calling function and printing names of students with score greater than 70

//function declaration
function getHighScorers(students, threshold) {
    const highScorers = []; //empty arrray to store names of students

    //loop iterating over every object in array
    students.forEach(value => {

        //checking if score of student is greater than threshold
        if (value.score > threshold) {
            highScorers.push(value.name);//insrting names of respective students to array
        }
    });
    return highScorers;//returning array
}