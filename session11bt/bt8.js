"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Đã gửi ${amount} vào tài khoản ${this.accountNumber}.`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Đã rút ${amount} từ tài khoản ${this.accountNumber}.`);
        }
        else {
            console.log(`Số dư không đủ trong tài khoản ${this.accountNumber}.`);
        }
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        const total = this.balance - amount;
        if (total >= -this.overdraftLimit) {
            this.balance -= amount;
            console.log(`Đã rút ${amount} từ tài khoản ${this.accountNumber}.`);
        }
        else {
            console.log(`Số tiền rút vượt quá hạn mức cho phép trong tài khoản ${this.accountNumber}.`);
        }
    }
}
let account2 = new CheckingAccount("Vương", 1000, 500);
account2.withdraw(1500);
account2.withdraw(2000);
