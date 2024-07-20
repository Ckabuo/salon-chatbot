// Object Literals
/*const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['games', 'movies', 'sports'],
    address: {
        street: '50 main street',
        city: 'Boston',
        state: 'MA'
    }
}
// alert(person);
console.log(person);
*/

// const todos = [
//     {
//         id: 1,
//         text: 'take out the trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Go to work',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'have a good night rest',
//         isCompleted: false
//     }
// ];
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON



/*
Write a code to store your personal details in variables, using both const and let keywords. (Put into consideration string, number, boolean and  typeof operator data types).

Using back ticks embedded your name into a sentence and alert.
*/

// let firstName = 'CHIJIOKE '; //string
// let lastName = 'KABUO' //string
// let occupation = 'student' //string
// let phoneNumber = 08131828508 //number
// const gender = 'male' //string

// alert(`welcome ${firstName + lastName}, number ${phoneNumber}, gender ${gender}.`)
// console.log(`this is my phone number; ${phoneNumber}`)

/*
Assign everyone's name to a variable and make a statement that says; we are _(number) in this class, we want to share 50000 Naira.
Assign to each persojn amount due
At the end, every other person should take 1300 from CJ's share, give everything to Victoria.
Alert(Victoria's share)
Alert(your own share)
*/
// const amount = 50000;
// const total = 8;
// let share = amount / total
// let deduce = share - (1300 * 7);
// let extra = 1300 * 7;
// let cjay = deduce;
// let Victoria = share + extra;
// let me = share;

// console.log(cjay);
// console.log(Victoria);
// console.log(me);

/*
If Buhari has 360 more days left in office, but he spends 20days in UK and 66days in Saudi Arabia. Using Modulus(remainder) and division operators, and other basic operators, alert the number of months and days he would spend in Nigeria excluding Saturdays and Sundays if each month contains 20days.
*/

/*
const totaldaysLeftInOffice = 360;
const daysInMonth = 20;
const totalNumOfMonths = totaldaysLeftInOffice / daysInMonth;
let daysInUk = 20;
let daysInSaudiArabia = 66;

let daysLeftInOffice = totaldaysLeftInOffice - (daysInUk + daysInSaudiArabia);
let dayLeftToSpendInNigeria = daysLeftInOffice % daysInMonth;
let numOfMonthsLeft = (daysLeftInOffice - dayLeftToSpendInNigeria) / daysInMonth;

alert(`buhari had ${totaldaysLeftInOffice} days left in Office, he spent ${daysInUk} days in Uk and ${daysInSaudiArabia} days in Saudi Arabia`)
alert(`Buhari has ${daysLeftInOffice} days left in office`);
alert(`Buhari has ${numOfMonthsLeft} months and ${dayLeftToSpendInNigeria} days left in office to spend in Nigeria`)
*/

/*
Question:
Using browser interactions, basic operators, conditional IF ELSE statement, implement a program that does the following.
A customer walks into a salon, on entry, the stylist asks for their name, and welcomes ${name} to the salon.
If the customer is a male, the stylist guides him to a male section, then show him a list of different styles of cut with respective prices.
If he chooses a haircut style outside the list, the stylist should be able to let him know it is not obtainable, but if he chooses from the list, the stylist
should let him know the price. If he agrees, the stylist will continue else he terminates the conversation.
Else,
If the customer is female, she goes to the female section and pick from a list of styles with their respective prices just as in the male section.
At the end, The stylist should say `Hello ${name} your bill is ${price}`, please pay.
If the customer over pays, the stylist should be able to give him or her their change.
If they underpay, they should be demanded to pay up.
If all is sorted, the stylist says a goodbye message.
*/
let optionForMale;
let optionForFemale;

const childrenHair = 500;
const adultHair = 700;
const skinCut = "free";

let hairTreatment = 1000;

const afro = 500;
const Braids = 700;
const Dread = 900;


const name = prompt("what is your name?");
alert(`welcome ${name} to the Saloon`);

let gender = prompt("Enter Gender", "male");

if (gender.toLowerCase() == "male") {
    alert(`
    Here's a price list of hairstyles and prices;
    1. children's hair ==> NGN500
    2. Adult hair cut ==> NGN700
    3. Hair treatment ==> NGN1000
    4. Skin cut ==> Free;
    `);

    optionForMale = prompt("which do you want (1-4)", "");

    if (optionForMale == "1") {
        alert(`your Bill is NGN500`);
        payment = prompt(`Hello ${name}, your Bill is ${childrenHair}, please pay`);
        if (payment == childrenHair) {
            alert(`Thank you ${name} for your patronage`);
        } else if (payment > childrenHair) {
            alert(`Here's your ${payment - childrenHair} change`);
            alert(`Thank you ${name} for your patronage`);
        } else if (payment < childrenHair) {
            console.log(payment);
            additonalPayment = prompt(`you have a ${childrenHair - payment} balance, please pay up`, `${childrenHair - payment}`);
            console.log(additonalPayment);
            let totalPayment = Number(payment) + Number(additonalPayment);
            console.log(totalPayment);
            if (totalPayment < childrenHair) {
                prompt(`you have a ${childrenHair - totalPayment} balance, please pay up`, `${childrenHair - totalPayment}`);
            }
        } alert(`Thank you ${name} for your patronage`);
    } else if (optionForMale == "2") {
        alert(`your Bill is NGN700`);
        payment = prompt(`Hello ${name}, your Bill is ${adultHair}, please pay`);
        if (payment == adultHair) {
            alert(`Thank you ${name} for your patronage`);
        } else if (payment > adultHair) {
            alert(`Here's your ${payment - adultHair} change`);
            alert(`Thank you ${name} for your patronage`);
        } else if (payment < adultHair) {
            prompt(`you have a ${adultHair - payment} balance, please pay up`, `${adultHair - payment}`);
            alert(`Thank you ${name} for your patronage`);
        }
    } else if (optionForMale == "3") {
        alert(`your Bill is NGN1000`);
        payment = prompt(`Hello ${name}, your Bill is ${hairTreatment}, please pay`);
        if (payment == hairTreatment) {
            alert(`Thank you ${name} for your patronage`);
        } else if (payment > hairTreatment) {
            alert(`Here's your ${payment - hairTreatment} change`);
            alert(`Thank you ${name} for your patronage`);
        } else if (payment < hairTreatment) {
            prompt(`you have a ${hairTreatment - payment} balance, please pay up`, `${hairTreatment - payment}`);
            alert(`Thank you ${name} for your patronage`);
        }
    } else if (optionForMale == "4") {
        alert(`intresting, you get a free hair cut`);
        alert(`Thank you ${name} for your patronage`);
    } else {
        alert(`invalid option`);
    }
} else if (gender.toLowerCase() == "female") {
    alert(`
    Here's a price list of hairstyles and prices;
    Afro ==> NGN500
    Braids ==> NGN700
    Dread ==> NGN900
    Hair Treatment ==> NGN1000
    `);

    optionForFemale = prompt("which do you want (1-4)", "");

    if (optionForFemale == "1") {
        alert(`your Bill is NGN500`);
        payment = prompt(`Hello ${name}, your Bill is ${afro}, please pay`);
        if (payment == afro) {
            alert(`Thank you ${name} for your patronage`);
        } else if (payment > afro) {
            alert(`Here's your ${payment - afro} change`);
            alert(`Thank you ${name} for your patronage`);
        } else if (payment < afro) {
            prompt(`you have a ${afro - payment} balance, please pay up`, `${afro - payment}`);
            alert(`Thank you ${name} for your patronage`);
        }
    } else if (optionForFemale == "2") {
        alert(`your Bill is NGN700`);
        payment = prompt(`Hello ${name}, your Bill is ${Braids}, please pay`);
        if (payment == Braids) {
            alert(`Thank you ${name} for your patronage`);
        } else if (payment > Braids) {
            alert(`Here's your ${payment - Braids} change`);
            alert(`Thank you ${name} for your patronage`);
        } else if (payment < Braids) {
            prompt(`you have a ${Braids - payment} balance, please pay up`, `${Braids - payment}`);
            alert(`Thank you ${name} for your patronage`);
        }
    } else if (optionForFemale == "3") {
        alert(`your Bill is NGN900`);
        payment = prompt(`Hello ${name}, your Bill is ${Dread}, please pay`);
        if (payment == Dread) {
            alert(`Thank you ${name} for your patronage`);
        } else if (payment > Dread) {
            alert(`Here's your ${payment - Dread} change`);
            alert(`Thank you ${name} for your patronage`);
        } else if (payment < Dread) {
            prompt(`you have a ${Dread - payment} balance, please pay up`, `${Dread - payment}`);
            alert(`Thank you ${name} for your patronage`);
        }
    } else if (optionForFemale == "4") {
        alert(`your Bill is NGN1000`);
        payment = prompt(`Hello ${name}, your Bill is ${hairTreatment}, please pay`);
        if (payment == hairTreatment) {
            alert(`Thank you ${name} for your patronage`);
        } else if (payment > hairTreatment) {
            alert(`Here's your ${payment - hairTreatment} change`);
            alert(`Thank you ${name} for your patronage`);
        } else if (payment < hairTreatment) {
            prompt(`you have a ${hairTreatment - payment} balance, please pay up`, `${hairTreatment - payment}`);
            alert(`Thank you ${name} for your patronage`);
        }
    } else {
        alert(`invalid option`);
    }
} else {
    alert(`we don't recognise your Gender`);
}