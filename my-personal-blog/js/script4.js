console.log("script4.js loaded");

var name = "gilberto santos";
console.log(typeof full_name);

var age = 30;
console.log('age needs to be a:', typeof age);

if (age >= 18) {
    console.log("You are an adult");
}

//methods == functions == behaviour
var full_name = "asd";

var persona = {
    name: full_name,
    age,
    eat: function() {
        console.log('${name} is eating...');

    },
};

console.log('persona:', persona);

persona.eat();


var account = {
    balance: 0,
    deposit: function (amount) {
        this.balance += amount;
        console.log('Deposited: ${amount}');
    },
    showBalance: function() {
        console.log('Balance: ${this.balance}');
    },

};

account.deposit(100);

account.showBalance();

var wallet_1 = prompt("How much do you have in your wallet 1?");
var wallet_2 = prompt("How much do you have in your wallet 2?");

if (wallet_1 >= wallet_2) {
    console.log("I have more in wallet 1 than in 2")
}

function deposit(amount, account) {
    console.log("called myFunction");
}

var account = {
    name: "Gilberto",
    account_number: 3578954,
    deposit
}