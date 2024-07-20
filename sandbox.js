/*A customer walks into a salon, on entry, the stylist asks for their name, and welcomes ${name} to the salon.
If the customer is a male, the stylist guides him to a male section, then show him a list of different styles of cut with respective prices.
If he chooses a haircut style outside the list, the stylist should be able to let him know it is not obtainable, but if he chooses from the list, the stylist
should let him know the price. If he agrees, the stylist will continue else he terminates the conversation.
Else,
If the customer is female, she goes to the female section and pick from a list of styles with their respective prices just as in the male section.
At the end, The stylist should say `Hello ${name} your bill is ${price}`, please pay.
If the customer over pays, the stylist should be able to give him or her their change.
If they underpay, they should be demanded to pay up.
If all is sorted, the stylist says a goodbye message.*/

let customer = {
    totalPayment: 0,
    price: 0,
    change: 0
};
let steps = ['name', 'gender', 'style', 'confirm', 'payment', 'change'];
let step = 0;
let styles = {
    male: {
        'Buzz Cut': 10,
        'Crew Cut': 15,
        'Classic Taper': 20,
        'Undercut': 25,
    },
    female: {
        'Bob Cut': 20,
        'Pixie Cut': 25,
        'Long Layers': 30,
        'V-Cut Layers': 35,
    }
};

function extractAmount(message) {
    let amountMatch = message.match(/(\d+(\.\d{1,2})?)/);
    return amountMatch ? parseFloat(amountMatch[0]) : 0;
}

function botMessage(message) {
    let chatBox = document.getElementById('chatBox');
    chatBox.innerHTML += `<div class="bot-div"><i class="fa-solid fa-robot fa-2xl"></i><p class="bot-message">${message}</p></div>`;
}

function userMessage(message) {
    let chatBox = document.getElementById('chatBox');
    chatBox.innerHTML += `<div class="user-div"><p class="user-message">${message}</p><i class="fa-solid fa-user fa-2xl"></i></div>`;
}

function nextStep(message) {
    userMessage(message);
    switch (steps[step]) {
        case 'name':
            customer.name = message;
            botMessage(`Hello ${customer.name}, welcome to the salon. What's your gender?`);
            break;
        case 'gender':
            customer.gender = message.toLowerCase();
            if (styles[customer.gender]) {
                botMessage(`Welcome to the ${customer.gender} section. Please choose a style: ${Object.keys(styles[customer.gender]).join(', ')}`);
            } else {
                botMessage('Invalid gender. Please enter a valid gender (Female or Male).');
                step--;
            }
            break;
        case 'style':
            const lowerCaseStyles = Object.fromEntries(Object.entries(styles[customer.gender]).map(([k, v]) => [k.toLowerCase(), v]));
            const lowerCaseMessage = message.toLowerCase();
            if (lowerCaseStyles[lowerCaseMessage]) {
                customer.style = lowerCaseMessage;
                customer.price = lowerCaseStyles[lowerCaseMessage];
                botMessage(`You have chosen ${customer.style}. The price will be $${customer.price}. Do you confirm?`);
            } else {
                botMessage(`Sorry, we don't have ${message}. Please choose a style from the list.`);
                step--;
            }
            break;
        case 'confirm':
            if (message.toLowerCase() === 'yes') {
                botMessage(`Great! Please pay $${customer.price}.`);
            } else {
                botMessage(`Okay. Please let us know if you need anything else.`);
                step = steps.length;
            }
            break;
        case 'payment':
            if (!message) {
                botMessage('Please enter a payment amount.');
                return;
            }
            let paid = extractAmount(message);
            customer.totalPayment += paid;
            if (customer.totalPayment < customer.price) {
                botMessage(`You have underpaid. Please pay the remaining $${customer.price - customer.totalPayment}.`);
                step--;
            } else {
                customer.change = customer.totalPayment - customer.price;
                botMessage(`You have overpaid. Your change is $${customer.change}.`);
            }
            break;
        case 'change':
            botMessage(`Goodbye ${customer.name} and thanks for your patronage.`);
            break;
    }
    step++;
}

document.getElementById('sendButton').addEventListener('click', () => {
    let userInput = document.getElementById('userInput').value.trim();
    nextStep(userInput);
    document.getElementById('userInput').value = '';
});

botMessage('Hello, what is your name?');

// Enable enter key to send messages
document.getElementById('userInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('sendButton').click();
  }
});