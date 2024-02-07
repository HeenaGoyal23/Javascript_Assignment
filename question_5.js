//LET:
// => let has block scope;
// => let can not be redeclared in same scope;
// => let can be reassigned;
// => let variables are hoisted on top without initialization;
let name = "Heena";
let quizesParticipated = 6;
{
    let name = "Hrishita";//variable can be redeclared in different scope
    quizesParticipated = 10;//value can be reassigned
    let quizesWon = 4;
    console.log("No. of Competitions " + name + " losed: " + (quizesParticipated - quizesWon));//gives correct result
}
// console.log("Total competitions losed: "+(quizesParticipated-quizesWon)); //error as quizesWon has block scope;
console.log("No. of Competitions " + name + " participated: " + quizesParticipated);//name value is unchanged inside block but quizesParticipated changed

// => in above example, name value remains unchanged as it is redeclared which makes let a great choice as it is not altering data.
// => but quizesParticipated is reassigned a value which is a limitation.



//CONST:
// => const has block scope;
// => const can not be redeclared in same scope;
// => const can not be reassigned;
// => const variables are hoisted on top without initialization;
const yourName = "Heena";
const age = 20;
{
    // yourName = "Hrishita"; //error as it can not be reassigned
    const language = "Javascript";
    console.log(yourName + " is " + age + " years old and is learning " + language);//gives correct result
}
// console.log(yourName+" is "+age+" years old and is learning "+language); //error as language as block scope.

// => in above example, values once assigned remain unchanged making it great choice where we dont want data to be altered.
// => but if data alteration is required at any point, it may prove to be a limitation.




//VAR:
// => var has function scope;
// => var can be redeclared in same scope;
// => var can be reassigned;
// => var variables are hoisted on top with value undefined;
var hobby = "singing";
{
    var students = 10;
    var hobby = "Dancing";//can be redeclared and reassigned
    console.log(students + " students love " + hobby);//gives correct result
}
console.log(students + " students love " + hobby);//hobby value changed inside block and students is accessible outside block;

// => in above example, values are being altered and redeclared without any check, it may lead to be inefficient at some point as no error will be shown even if we are redclaring the same variables.
// => it can be used where we want value to get changed frequently