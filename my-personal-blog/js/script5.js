var account = {
    name: "Gilberto",
    account_number: 3578954,
    deposit: function (amount) {
        this.balance += amount;
        console.log('Deposited: ${amount}');
    },
};


console.log(typeof account.account_number);
var value = account.account_number.toString();
console.log(typeof value);

console.log(account.balance.toFixed(2));

